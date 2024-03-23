import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import Pagination from "./components/pagination";
import BtnBack from "./components/btnBack";
import AlbumsDiv from "./components/AlbumsDiv";

async function fetchSearchResults(query) {
    console.log('Fetching data for query:', query);
    const responseArtiste = await fetch(`http://localhost:8000/artists`);
    const dataArtiste = await responseArtiste.json().then(data => data.map(item => ({ ...item, type: 'artist' })));

    const responseAlbums = await fetch(`http://localhost:8000/albums`);
    const dataAlbums = await responseAlbums.json().then(data => data.map(item => ({ ...item, type: 'album' })));

    const responseGenre = await fetch(`http://localhost:8000/genres`);
    const dataGenre = await responseGenre.json().then(data => data.map(item => ({ ...item, type: 'genre' })));

    const allData = [...dataArtiste, ...dataAlbums, ...dataGenre];

    const filteredData = allData.filter(item => item.name.toLowerCase().startsWith(query.toLowerCase()));

    console.log('Fetched data:', allData);
    console.log('Filtered data:', filteredData);

    return filteredData;
}

function SearchPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [albumResults, setAlbumResults] = useState([]);
    const [artistResults, setArtistResults] = useState([]);
    const [genreResults, setGenreResults] = useState([]);

    const [currentPageAlbum, setCurrentPageAlbum] = useState(1);
    const [currentPageArtist, setCurrentPageArtist] = useState(1);
    const [currentPageGenre, setCurrentPageGenre] = useState(1);
    const [recordsPerPage] = useState(3);

    useEffect(() => {
        if (searchQuery !== '') {
            fetchSearchResults(searchQuery).then(data => {
                setAlbumResults(data.filter(item => item.type === 'album'));
                setArtistResults(data.filter(item => item.type === 'artist'));
                setGenreResults(data.filter(item => item.type === 'genre'));
            });
        }
    }, [searchQuery]);

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            console.log('Enter key pressed. Setting search query to:', event.target.value);
            setSearchQuery(event.target.value);
        }
    }


    const indexOfLastRecordAlbum = currentPageAlbum * recordsPerPage;
    const indexOfFirstRecordAlbum = indexOfLastRecordAlbum - recordsPerPage;
    const currentAlbums = albumResults.slice(indexOfFirstRecordAlbum, indexOfLastRecordAlbum);

    const indexOfLastRecordArtist = currentPageArtist * recordsPerPage;
    const indexOfFirstRecordArtist = indexOfLastRecordArtist - recordsPerPage;
    const currentArtists = artistResults.slice(indexOfFirstRecordArtist, indexOfLastRecordArtist);

    const indexOfLastRecordGenre = currentPageGenre * recordsPerPage;
    const indexOfFirstRecordGenre = indexOfLastRecordGenre - recordsPerPage;
    const currentGenres = genreResults.slice(indexOfFirstRecordGenre, indexOfLastRecordGenre);

    return (
        <div style={{
            backgroundColor: '#282828',
            width: '100%',
            minHeight: '100vh',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <div style={{
                width: '100%',
                height: '10vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '10vh'
            }}>
                <BtnBack url={"/"}/>
                <img src={logo} alt="logo" style={{height: '100%'}}/>
                <input type="text" placeholder="Search" style={{
                    width: '90vh',
                    height: '6vh',
                    marginRight: '60vh',
                    paddingLeft: '2vh',
                    borderRadius: '20px'
                }} onKeyPress={handleKeyPress}/>
            </div>
            <div style={{
                border: '3px solid white',
                borderRadius: '30px',
                margin: '10px 0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                overflow: 'auto',
                height: '30vh'
            }}>
                <h2 style={{textAlign: 'left', marginLeft: '2vh', color: 'white'}}>Album</h2>
                {currentAlbums.map(album => (
                    <a href={"./Details_album/" + album.id}>
                        <p style={{color: 'white'}} key={album.id}>{album.name}</p>
                    </a>
                ))}

                <Pagination
                    nPages={Math.ceil(albumResults.length / recordsPerPage)}
                    currentPage={currentPageAlbum}
                    setCurrentPage={setCurrentPageAlbum}
                />
            </div>
            <div style={{
                border: '3px solid white',
                borderRadius: '30px',
                margin: '10px 0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                overflow: 'auto',
                height: '30vh'
            }}>
                <h2 style={{textAlign: 'left', marginLeft: '2vh', color: 'white'}}>Artist</h2>
                {currentArtists.map(artist =>
                        <a href={"./Details_artiste/" + artist.id}>
                            <p style={{color: 'white'}} key={artist.id}>{artist.name}</p>
                        </a>
                )}

                <Pagination
                    nPages={Math.ceil(artistResults.length / recordsPerPage)}
                    currentPage={currentPageArtist}
                    setCurrentPage={setCurrentPageArtist}
                />
            </div>
            <div style={{
                border: '3px solid white',
                borderRadius: '30px',
                margin: '10px 0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                overflow: 'auto',
                height: '30vh'
            }}>
                <h2 style={{textAlign: 'left', marginLeft: '2vh', color: 'white'}}>Genre</h2>
                {currentGenres.map(genre =>
                    <a href={"./Details_genre/" + genre.id}>
                        <p style={{color: 'white'}} key={genre.id}>{genre.name}</p>
                    </a>
                )}

                <Pagination
                    nPages={Math.ceil(genreResults.length / recordsPerPage)}
                    currentPage={currentPageGenre}
                    setCurrentPage={setCurrentPageGenre}
                />
            </div>
        </div>
    )
}

export default SearchPage;