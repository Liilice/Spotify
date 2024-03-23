import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import LargeDiv2Text from "./components/largeDiv.jsx";
import Details_album from "./Details_album.jsx";
import ListingAlbums from "./listing_album.js";
import "./App.css";

function Homepage() {
    const albumm = 2;
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const responseAlbums = await fetch('http://localhost:8000/albums');
            const dataAlbs = await responseAlbums.json();

            const result = await Promise.all(dataAlbs.map(async (album) => {
                const responseArtist = await fetch(`http://localhost:8000/artists/${album.artist_id}`);
                const dataArtist = await responseArtist.json();
                return { ...album, artist: dataArtist };
            }));

            setData(result);
        };

        fetchData();
    }, []);

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
            <nav style={{
                backgroundColor: 'red',
                width: '100%',
                height: '10vh',
            }}>
                <h1>Homepage</h1>
                <Link to={`/details_album/${albumm}`}>Details_album</Link>
                <Link to={`/listing_album`}>Listing_album</Link>
            </nav>
            {data.map(item => (
                <LargeDiv2Text
                    key={item.id}
                    backgroundImage={item.cover}
                    textColor1="white"
                    textColor2="gray"
                    Text1={item.name}
                    Text2={item.artist ? item.artist.name : 'No artist'}
                    style={{ margin: '20px' }}
                />
            ))}
        </div>
    )



}

function App() {
    Homepage();
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/listing_album" element={<ListingAlbums />} />
                <Route path="/details_album/:album" element={<Details_album />} />
            </Routes>
        </Router>
    );
}

export default App;
