import Square from "./Square";

const LinksListItems = () => {
  const Data = [
    {
      link: "https://tienda-de-garage.herokuapp.com",
      text: "Tienda de Garage",
    },
    {
      link: "https://spotify-ivan.herokuapp.com",
      text: "Spotify Search",
    },
    {
      link: "https://space-demons3.herokuapp.com",
      text: "Space Challenge",
    },
    {
      link: "https://desolate-castle-34897.herokuapp.com",
      text: "Desolate Castle",
    },
  ];

  return Data.map((d) => (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Square />
        &nbsp;
        <div style={{ position: "absolute" }}>
          {/* <Particles params={particlesConfig} /> */}
        </div>
        <a
          href={d.link}
          style={{
            textDecoration: "none",
            // color: "black",
            // position: "absolute",
            zIndex: 1,
          }}
        >
          <p>{d.text}</p>
        </a>
      </div>
    </>
  ));
};

export default LinksListItems;
