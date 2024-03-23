import "./App.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BtnBack from "./components/btnBack";
import AlbumsGenre from "./components/AlbumsGenre";
import Pagination from "./components/pagination";

function Details_genre() {
  const [albums, setAlbums] = useState([]);
  const [all_albums, setAll_albums] = useState([]);
  const [artistes, setArtistes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(6);

  let album_id = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:8000/genres/" + album_id.genre
      );
      const data = await response.json();
      setAlbums(data.albums);
      const all_albums = await fetch("http://localhost:8000/albums");
      const data_albums = await all_albums.json();
      setAll_albums(data_albums);

      const artistes = await fetch("http://localhost:8000/artists");
      const data_artistes = await artistes.json();
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
    // console.log(result);
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
  //   console.log(albu);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = albu.splice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(albu.length / recordsPerPage);

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
        <h1 style={{ fontSize: "75px", marginRight: "5vh" }}>Details Genre</h1>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {/* {console.log(albu)} */}
        {albu.map((album) => (
          <AlbumsGenre info={album} />
        ))}
      </div>
      {/* <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      /> */}
    </div>
  );
}

export default Details_genre;
