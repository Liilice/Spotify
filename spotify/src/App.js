import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NewFile from "./test.jsx";
import LargeDiv2Text from "./components/largeDiv.jsx";
import TopCoverImage from "./components/TopCoverimage.jsx";
import SmallDiv from "./components/smallDiv.jsx";
import logoSpotify from "./img/spotifyLogoAndText.png";
import Test from "./img/test.jpeg";
import logo from "./logo.svg";
import Details_album from "./Details_album.jsx";
import "./App.css";

function MainPage() {
  const album = 2;
  return (
    <div className="App">
      <TopCoverImage
        title={"Test"}
        titleColor={"blue"}
        src={Test}
        alt={"Test"}
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <SmallDiv backgroundImage={Test} text={"Spotify"} />
        <LargeDiv2Text
          backgroundImage={Test}
          textColor1={"white"}
          textColor2={"gray"}
          Text1={"Text1 trop bien"}
          Text2={"Text 2 trop bien"}
        />
        <Link to={`/caca`}>Go to New File</Link>
        <Link to={`/details_album/${album}`}>Details_album</Link>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/caca" element={<NewFile />} />
        <Route path="/details_album/:album" element={<Details_album />} />
      </Routes>
    </Router>
  );
}

export default App;
