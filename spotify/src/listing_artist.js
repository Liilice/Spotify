import ArtistDiv from "./components/ArtistDiv";
import Pagination from "./components/pagination";
import BtnBack from "./components/btnBack"
import { useEffect, useState } from 'react';

function ListingArtists() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(6);

    useEffect(() => {
        const fetchData = async () => {
            const responseArtist = await fetch('http://localhost:8000/artists');
            const dataArtist = await responseArtist.json();

            setData(dataArtist);
            setLoading(false);
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5vh' }}>
                <BtnBack url='/' />
                <h1 style={{ fontSize: '75px', marginRight: '5vh' }}>List Artists</h1>
            </div>
            <div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {currentRecords.map(artist => (
                    <ArtistDiv info={artist} />
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

export default ListingArtists;