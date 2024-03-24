import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import LargeDiv2Text from "./components/largeDiv.jsx";
import Details_album from "./Details_album.jsx";
import Details_artiste from "./Details_artiste.jsx";
// import Details_genre from "./Details_genre.jsx";
import ListingAlbums from "./listing_album.js";
import ListingGenre from "./listing_genre.js";
import ListingArtists from "./listing_artist.js";
import SearchPage from "./SearchPage";
import Navbar from "./components/Navbar";
import  LogoSportify from "./img/spotifyLogoAndText.png";
import "./App.css";

function Homepage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const responseAlbums = await fetch('http://localhost:8000/albums');
            const dataAlbs = await responseAlbums.json();

            let result = [];

            for (let album of dataAlbs) {
                const responseArtist = await fetch(`http://localhost:8000/artists/${album.artist_id}`);
                const dataArtist = await responseArtist.json();
                result.push({ ...album, artist: dataArtist });
            }

            setData(result.sort(() => Math.random() - 0.5));
        };

        fetchData();
    }, []);

    const dataToDisplay = data.slice(0, 9);
    return (
        <div style={{
            backgroundColor: '#282828',
            width: '100%',
            minHeight: '100vh',
            overflow: 'hidden',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around'
        }}>
            <Navbar  Image={LogoSportify} />
            {dataToDisplay.map(item => (
                <a href={"./Details_album/" + item.id}>
                    <LargeDiv2Text
                        key={item.id}
                        backgroundImage={item.cover}
                        textColor1="white"
                        textColor2="gray"
                        Text1={item.name}
                        Text2={item.artist ? item.artist.name : 'No artist'}
                        style={{ margin: '20px' }}
                    />
                </a>
            ))}
        </div>
    )
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/listing_album" element={<ListingAlbums />} />
                <Route path="/Details_album/:album" element={<Details_album />} />
                <Route path="/details_artiste/:artiste" element={<Details_artiste />} />
                {/*<Route path="/details_genre/:genre" element={<Details_genre />} />*/}
                <Route path="/listing_genre" element={<ListingGenre />} />
                <Route path="/listing_artists" element={<ListingArtists />} />
            </Routes>
        </Router>
    );
}

export default App;