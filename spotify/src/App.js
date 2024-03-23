import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NewFile from "./test.jsx";
import ListingAlbums from './listing_album.js';
import { useEffect, useState } from 'react';

function Homepage() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const responseAlbums = await fetch('http://localhost:8000/albums');
            const dataAlbums = await responseAlbums.json();
            const result = await Promise.all(dataAlbums.map(async (album) => {
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
        }}>
            <Link to={`/list-albums`}>Go to New File</Link>
            <nav style={{
                backgroundColor: 'red',
                width: '100%',
                height: '10vh',
            }}>
            </nav>
            <h1>Homepage</h1>
            {data.map(item => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <h3>{item.artist ? item.artist.name : 'No artist'}</h3>
                </div>
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
                <Route path="/caca" element={<NewFile />} />
                <Route path="/list-albums" element={<ListingAlbums />} />
            </Routes>
        </Router>
    );
}
export default App;