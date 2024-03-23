function BtnBack(url) {
  console.log(url)
  return (
    <a href={url.url}>
      <div style={{
        width: '10vh',
        height: '10vh',
        border: '3px solid white',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <p style={{ color: 'white' }}>Back</p>
      </div>
    </a>
  );
}

export default BtnBack;