const AlbumsGenre = ({ info }) => {
  return (
    <a href={"/details_album/" + info[0].id}>
      <div
        style={{
          display: "flex",
          width: "50vh",
          height: "25vh",
          backgroundImage: `url(${info[0].cover})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          border: "3px solid white",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "5vh",
        }}
      >
        <h1>{info[0].id}</h1>
        <h1
          style={{
            color: "white",
            fontSize: "1.5rem",
            position: "relative",
            top: "-2vh",
            paddingTop: "2vh",
            paddingLeft: "2vh",
          }}
        >
          {info[0].name}
        </h1>
        <h1
          style={{
            color: "gray",
            fontSize: "1rem",
            position: "relative",
            top: "-7vh",
            padding: "1vh",
          }}
        >
          {info[1]}
        </h1>
      </div>
    </a>
  );
};

export default AlbumsGenre;
