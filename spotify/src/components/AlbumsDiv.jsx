const AlbumsDiv = ({info}) => {
    console.log(info)
    return (
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
            <h1 style={{color: 'white', fontSize: '2.5rem' ,position: 'relative', top: '-2vh'}}>{info.name}</h1>
            <h1 style={{color: 'gray', fontSize: '2rem' ,position: 'relative', top: '-7vh' }}>{info.artist}</h1>
        </div>
    );
}

export default AlbumsDiv;