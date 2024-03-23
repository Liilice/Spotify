import "./App.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BtnBack from "./components/btnBack";

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
      const responseArtist = await fetch(
        "http://localhost:8000/artists/" + dataAlbums.album.artist_id
      );
      const dataArtist = await responseArtist.json();
      setArtist_id(dataArtist.name);
    };
    fetchData();
  }, []);
  return (
    <div
      style={{ backgroundColor: "#282828", width: "100%", minHeight: "100vh" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "5vh",
        }}
      >
        <BtnBack url="/" />
        <h1 style={{ fontSize: "75px", marginRight: "5vh" }}>Details Album</h1>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <img src={album_info.cover} alt="cover" />
        </div>
        <ul style={{ listStyle: "none", color: "white" }}>
          <li>Name : {album_info.name}</li>
          <li>
            <br />
          </li>
          <li>Artist : {artist_id} </li>
          <li>
            <br />
          </li>
          <li>Description : {album_info.description}</li>
          <li>
            <br />
          </li>
          <li>
            Release_date :{" "}
            {new Date(album_info.release_date * 1000).toDateString()}
          </li>
          <li>
            <br />
          </li>
          <li>Popularity : {album_info.popularity}</li>
        </ul>
      </div>

      <h2 style={{ fontSize: "60px", marginRight: "5vh" }}>Tracks</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {album_tracks.map((track) => (
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              justifyContent: "space-between",
              color: "white",
              marginRight: "40px",
            }}
          >
            <li
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p style={{ paddingRight: "30px" }}>{track.track_no} </p>
              <audio src={track.mp3} controls></audio>
            </li>
            {/* 
            <li>
              <audio src={track.mp3} controls></audio>
            </li> */}
            <li>name : {track.name}</li>
            <li>duration : {(track.duration / 60).toFixed(2)}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Details_album;
