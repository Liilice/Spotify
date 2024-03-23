import GenreDiv from "./components/genreDiv";
import Pagination from "./components/pagination";
import { useEffect, useState } from 'react';

function ListingGenre(){
    const [data, setData] = useState([])

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(6);

    useEffect(() => {
        const fetchData = async () => {
            const responseGenre = await fetch('http://localhost:8000/genres');
            const dataGenre = await responseGenre.json();
            setData(dataGenre);
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
                <GenreDiv info={album}/>
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

export default ListingGenre;