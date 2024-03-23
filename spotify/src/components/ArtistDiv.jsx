const ArtistDiv = ({ info }) => {
    return (
        <a href={"/details_artiste/"+ info.id}>
            <div style={{
                width: '50vh',
                height: '25vh',
                backgroundImage: `url(${info.photo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                border: '3px solid white',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                margin:'2vh'
            }}>
                <h1 style={{ color: 'white', fontSize: '2.5rem', position: 'relative', top: '-2vh' }}>{info.name}</h1>
                <h1 style={{ color: 'white', fontSize: '1.5rem', position: 'relative', top: '-2vh' }}>{info.description}</h1>
            </div>
        </a>
    );
}

export default ArtistDiv;