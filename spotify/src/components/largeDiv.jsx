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
            alignItems: 'center'
        }}>
            <h1 style={{color: props.textColor1, fontSize: '2.5rem' ,position: 'relative', top: '-2vh', left: '-15vh'}}>{props.Text1}</h1>
            <h1 style={{color: props.textColor2, fontSize: '2rem' ,position: 'relative', top: '-7vh', left: '-12vh'}}>{props.Text2}</h1>
        </div>
    );
}

export default LargeDiv2Text;