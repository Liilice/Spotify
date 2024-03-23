function LargeDiv2Text(props) {
    return (
        <div style={{
            width: '50vh',
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
            alignItems: 'center',
            margin: '1vh'
        }}>
            <h1 style={{color: props.textColor1, fontSize: '2.5rem' ,position: 'relative', top: '-2vh', paddingTop: '2vh', paddingLeft: '2vh'}}>{props.Text1}</h1>
            <h1 style={{color: props.textColor2, fontSize: '2rem' ,position: 'relative', top: '-7vh', padding: '1vh'}}>{props.Text2}</h1>
        </div>
    );
}

export default LargeDiv2Text;