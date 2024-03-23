import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NewFile from "./test.jsx";
import logo from './logo.svg';
import './App.css';

function MainPage() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <Link to={`/caca`}>Go to New File</Link>
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
            </Routes>
        </Router>
    );
}

export default App;