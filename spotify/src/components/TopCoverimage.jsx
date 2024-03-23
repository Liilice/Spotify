function TopCoverImage(props) {
  return (
    <div style={{
        width: '100%',
        height: '40vh',
        backgroundImage: `url(${props.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <h1 style={{color: props.titleColor, fontSize: '2.5rem' ,position: 'relative', top: '12vh', right: '90vh'}}>{props.title}</h1>
    </div>
  )
}

export default TopCoverImage;