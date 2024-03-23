import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

function Details_genre() {
  const [albums, setAlbums] = useState([]);
  const [all_albums, setAll_albums] = useState([]);
  const [artistes, setArtistes] = useState([]);
  let album_id = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:8000/genres/" + album_id.genre
      );
      const data = await response.json();
      //   console.log(data);
      setAlbums(data.albums);
      //   console.log(albums);
      const all_albums = await fetch("http://localhost:8000/albums");
      const data_albums = await all_albums.json();
      //   console.log(data_albums);
      setAll_albums(data_albums);

      const artistes = await fetch("http://localhost:8000/artists");
      const data_artistes = await artistes.json();
      //   console.log(data_albums);
      setArtistes(data_artistes);
    };
    fetchData();
  }, []);

  function album_artiste() {
    let arr_albums_artiste = [];
    artistes.map((artiste) => {
      all_albums.forEach((albums) => {
        if (artiste.id === albums.artist_id) {
          arr_albums_artiste.push([albums, artiste.name]);
        }
      });
    });
    return arr_albums_artiste;
  }

  function check() {
    let result = album_artiste();
    console.log(result);
    let arr = [];
    result.map((album) => {
      let album_id = album[0].id;
      for (let i = 0; i < albums.length; i++) {
        if (album_id === albums[i]) {
          arr.push(album);
        }
      }
    });
    return arr;
  }
  let albu = check();

  return (
    <div className="App">
      {console.log(albu)}
      {albu.map((album) => (
        <ul>
          <li>nom : {album[0].name}</li>
          <li>auteur : {album[1]}</li>
        </ul>
      ))}

      <p>test</p>
    </div>
  );
}

export default Details_genre;
