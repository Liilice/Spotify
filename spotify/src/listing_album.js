import Pagination from "./pagination";
import AlbumsDiv from "./AlbumsDiv"
import { useEffect, useState } from 'react';

function ListingAlbums(){
    const [data, setData] = useState([])

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(6);

    useEffect(() => {
        const fetchData = async () => {
            const responseAlbums = await fetch('http://localhost:8000/albums');
            const dataAlbums = await responseAlbums.json();

            const result = await Promise.all(dataAlbums.map(async (album) => {
                const responseArtist = await fetch(`http://localhost:8000/artists/${album.artist_id}`);
                const dataArtist = await responseArtist.json();
                return { ...album, artist: dataArtist.name };
            }));

            setData(result);
        };

        fetchData();
    }, []);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(data.length / recordsPerPage)
    
    return (
        <div style={{
            backgroundColor: '#282828',
            width: '100%',
            minHeight: '100vh',
        }}>
            <h1>List Albums</h1>
            <div>
            {currentRecords.map(album => (
                <AlbumsDiv info={album}/>
            ))}
            </div>
            <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    )
}

export default ListingAlbums;