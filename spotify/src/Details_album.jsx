import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

function Details_album() {
  const [album_info, setAlbum_info] = useState([]);
  const [album_tracks, setAlbum_tracks] = useState([]);
  const [artist_id, setArtist_id] = useState();
  let album_id = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const responseAlbums = await fetch(
        "http://localhost:8000/albums/" + album_id.album
      );
      const dataAlbums = await responseAlbums.json();
      console.log(dataAlbums);
      setAlbum_info(dataAlbums.album);
      setAlbum_tracks(dataAlbums.tracks);
      // const result = await Promise.all;
      const responseArtist = await fetch(
        "http://localhost:8000/artists/" + dataAlbums.album.artist_id
      );
      const dataArtist = await responseArtist.json();
      setArtist_id(dataArtist.name);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <div>
        <p>Album id : {album_info.id}</p>
        <p>Nom de l'artiste : {artist_id}</p>
        <p>Name : {album_info.name}</p>
        <p>Description : {album_info.description}</p>
        <img src={album_info.cover} alt="cover" />
        {/* <p>cover : {album_info.cover}</p> */}
        <img src={album_info.cover_small} alt="cover_small" />
        {/* <p>cover_small : {album_info.cover_small}</p> */}
        <p>release_date : {album_info.release_date}</p>
        <p>popularity : {album_info.popularity}</p>
      </div>
      {album_tracks.map((track) => (
        <ul>
          <li>album id : {track.album_id}</li>
          <li>
            <audio src={track.mp3} controls></audio>
          </li>
          {/* <li>mp3 : {track.mp3}</li> */}
          <li>name : {track.name}</li>
          <li>duration : {track.duration}</li>
          <li>tracks number : {track.track_no}</li>
        </ul>
      ))}
    </div>
  );
}

export default Details_album;
