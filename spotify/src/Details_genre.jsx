import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pagination from "./components/pagination";
import BtnBack from "./components/btnBack";
import AlbumsDiv from "./components/AlbumsDiv";

function Details_genre() {
  const [albums, setAlbums] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(6);

  let genre_id = useParams();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:8000/genres/${genre_id.genre}`
      );
      const data = await response.json();
      let albums_genre = [];

      for (let album of data.albums) {
        const responseAlbums = await fetch(
          `http://localhost:8000/albums/${album}`
        );
        const dataAlbum = await responseAlbums.json();
        albums_genre.push({
          ...album,
          name: dataAlbum["album"].name,
          id: dataAlbum["album"].id,
        });
      }
      setAlbums(albums_genre);
    }
    fetchData();
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = albums.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(albums.length / recordsPerPage);
  return (
    <div
      style={{
        backgroundColor: "#282828",
        width: "100%",
        minHeight: "100vh",
      }}
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
        <h1 style={{ fontSize: "75px", marginRight: "5vh" }}>
          Liste Album by genre
        </h1>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {currentRecords.map(
          (album) => (
            <AlbumsDiv info={album} />
          )
          //   console.log(album)
        )}
      </div>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default Details_genre;
