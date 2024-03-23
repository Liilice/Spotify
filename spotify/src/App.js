// import logo from "./logo.svg";
// import "./App.css";
// import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// function App() {
//   const [artiste, setArtiste] = useState([]);
//   URLSearchParams
//   const url = "http://localhost:8000/artists/"+;
//   function fetch_artiste() {
//     let response;
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
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

// export default App;

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Details_album from "./Details_album";
import logo from "./logo.svg";
import "./App.css";

function MainPage() {
  const album = 1;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to={`/details_album/${album}`}>Go to New File</Link>
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
        <Route path="/details_album/:album" element={<Details_album />} />
      </Routes>
    </Router>
  );
}

export default App;
