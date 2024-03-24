import GenreDiv from "./components/genreDiv";
import BtnBack from "./components/btnBack"
import { useEffect, useState } from 'react';

function ListingGenre(){
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const responseGenre = await fetch('http://localhost:8000/genres');
            const dataGenre = await responseGenre.json();
            setData(dataGenre);
        };
        fetchData();
    }, []);
    
    return (
        <div style={{
            backgroundColor: '#282828',
            width: '100%',
            minHeight: '100vh'
        }}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'5vh'}}>
            <BtnBack url='/'/>
            <h1 style={{fontSize:'75px', marginRight:'5vh'}}>List Genre</h1>
            </div>
            <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
            {data.map(genre => (
                <GenreDiv info={genre}/>
            ))}
            </div>
        </div>
    )
}

export default ListingGenre;