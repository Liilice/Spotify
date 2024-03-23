import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import NewFile from "./test.jsx";
import LargeDiv2Text from "./components/largeDiv.jsx";
import TopCoverImage from "./components/TopCoverimage.jsx";
import SmallDiv from "./components/smallDiv.jsx";
import logoSpotify from "./img/spotifyLogoAndText.png";
import Test from "./img/test.jpeg";
import logo from "./logo.svg";
import Details_album from "./Details_album.jsx";
import "./App.css";

function Homepage() {
    const album = 2;
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
                <Link to={`/details_album/${album}`}>Details_album</Link>
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
// function MainPage() {
//   const album = 2;
//   return (
//     <div className="App">
//       <TopCoverImage
//         title={"Test"}
//         titleColor={"blue"}
//         src={Test}
//         alt={"Test"}
//       />
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <SmallDiv backgroundImage={Test} text={"Spotify"} />
//         <LargeDiv2Text
//           backgroundImage={Test}
//           textColor1={"white"}
//           textColor2={"gray"}
//           Text1={"Text1 trop bien"}
//           Text2={"Text 2 trop bien"}
//         />
//         <Link to={`/caca`}>Go to New File</Link>
//         <Link to={`/details_album/${album}`}>Details_album</Link>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/caca" element={<NewFile />} />
        <Route path="/details_album/:album" element={<Details_album />} />
      </Routes>
    </Router>
  );
}

export default App;
