function  Navbar(props) {
  return (
    <nav style={{
        width: '100%',
        height: '10vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderBottom: '3px solid white',
        paddingBottom: "2vh"
    }}>
        <img style={{
            height: "7vh"
        }} src={props.Image} alt={"test"}/>
        <ul style={{
            display: 'flex',
            listStyle: 'none',
            justifyContent: 'space-around',
            width: '80vh',
            fontSize: "1.3rem",
            color: "white",
        }}>
            <a href={"/search"}>
                <li style={{
                    border: "3px solid white",
                    borderRadius: "50px",
                    padding: "1.5vh",
                    color: "white"
                }}>Search
                </li>
            </a>
            <a href={"/listing_album"}>
                <li style={{
                    border: "3px solid white",
                    borderRadius: "50px",
                    padding: "1.5vh",
                    color: "white"
                }}>Listing Album</li>
            </a>
            <a href={"/listing_artists"}>
                <li style={{
                    border: "3px solid white",
                    borderRadius: "50px",
                    padding: "1.5vh",
                    color: "white"
                }}>Listing Artiste</li>
            </a>
            <a href={"/listing_genre"}>
                <li style={{
                    border: "3px solid white",
                    borderRadius: "50px",
                    padding: "1.5vh",
                    color: "white"
                }}>Listing Genre</li>
            </a>
        </ul>
    </nav>
  );
}

export default Navbar;