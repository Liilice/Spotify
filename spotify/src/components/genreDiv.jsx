const GenreDiv = ({ info }) => {
    return (
        <a href={"/details_genre/"+ info.id}>
            <div style={{
                width: '30vh',
                height: '25vh',
                border: '3px solid white',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                margin:'2vh'
            }}>
                <h1 style={{ color: 'white', fontSize: '2.5rem', position: 'relative', top: '-2vh' }}>{info.name}</h1>
            </div>
        </a>
    );
}

export default GenreDiv;