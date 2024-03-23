const GenreDiv = ({ info }) => {
    console.log(info)
    return (
        <a href={"/details_album/"+ info.id}>
            <div style={{
                width: '50vh',
                height: '25vh',
                backgroundImage: `url(${info.cover})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                border: '3px solid white',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <h1 style={{ color: 'white', fontSize: '2.5rem', position: 'relative', top: '-2vh' }}>{info.name}</h1>
            </div>
        </a>
    );
}

export default GenreDiv;