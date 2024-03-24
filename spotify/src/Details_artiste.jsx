import "./App.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BtnBack from "./components/btnBack";
import AlbumsDiv from "./components/AlbumsDiv";

function Details_artiste() {
  const [artiste, setArtiste] = useState([]);
  const [artiste_info, setArtiste_info] = useState([]);

  let artiste_id = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const responseAlbums = await fetch(
        "http://localhost:8000/albums/artist/" + artiste_id.artiste
      );
      const dataAlbums = await responseAlbums.json();
      setArtiste(dataAlbums);

      const responseArtiste = await fetch(
        "http://localhost:8000/artists/" + artiste_id.artiste
      );
      const dataArtiste = await responseArtiste.json();
      setArtiste_info(dataArtiste);
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
        <h1 style={{ fontSize: "75px", marginRight: "5vh" }}>
          Details Artiste
        </h1>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <img src={artiste_info.photo} alt="" />
        </div>
        <ul style={{ listStyle: "none", color: "white" }}>
          <li>Name : {artiste_info.name}</li>
          <li>
            <br />
          </li>
          <li>Description :{artiste_info.description}</li>
          <li>
            <br />
          </li>
          <div style={{ overflow: "auto", height: "25vh" }}>
            <li>Bio : {artiste_info.bio}</li>
          </div>
          {console.log(artiste_info)}
        </ul>
      </div>

      <h2 style={{ fontSize: "60px", marginRight: "5vh" }}>Albums</h2>

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {artiste.map((album) => (
          <AlbumsDiv info={album} />
        ))}
      </div>
    </div>
  );
}

export default Details_artiste;
