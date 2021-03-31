import Square from "./Square";
const DataListItems = () => {
  const Data = [
    {
      link: "https://www.google.com.mx/?hl=es-419",
      text: "link for test ",
    },
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
    <div style={{ display: "flex", alignItems: "center" }}>
      <Square />
      &nbsp;
      <a href={d.link} style={{ textDecoration: "none", color: "black" }}>
        <p>{d.text}</p>
      </a>
    </div>
  ));
};

const ProjectLinks = () => {
  return (
    <>
      <div
        style={{
          padding: "50px",
          textAlign: "left",
          // background: "linear-gradient(280deg, #b0e, #d08)",
          // color: "black",
        }}
      >
        <h1>Links</h1>
        {DataListItems()}
      </div>
    </>
  );
};

export default ProjectLinks;
