const AlbumsDiv = ({ info }) => {
    console.log(info)
    return (
        <a href={"/details_album/"+ info.id}>
            <div style={{
                display: 'flex',
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
                alignItems: 'center',
                margin: '5vh'
            }}>
                <h1 style={{ color: 'white', fontSize: '2.5rem', position: 'relative', top: '-2vh', paddingTop: '2vh', paddingLeft: '2vh'}}>{info.name}</h1>
                <h1 style={{ color: 'gray', fontSize: '2rem', position: 'relative', top: '-7vh', padding: '1vh'}}>{info.artist}</h1>
            </div>
        </a>
    );
}   

export default AlbumsDiv;