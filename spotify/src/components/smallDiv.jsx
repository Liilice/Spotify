function SmallDiv(props) {
  return (
    <div style={{
        width: '25vh',
        height: '25vh',
        backgroundImage: `url(${props.backgroundImage})`,
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
      <p>{props.text}</p>
    </div>
  );
}

export default SmallDiv;