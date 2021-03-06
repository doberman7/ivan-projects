import Square from "./Square";
import { Frame } from "framer";
const frame = {
  background: "transparent",
};
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
      link: "https://reddit-doberman7.vercel.app/",
      text: "Reddit Clone",
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
        <div style={{ position: "absolute" }}></div>
        <a
          href={d.link}
          target="_blank"
          rel="noreferrer"
          style={{
            textDecoration: "none",
            // color: "black",
            // position: "absolute",
            zIndex: 1,
          }}
        >
          <Frame
            // height={45}
            // width={85}
            style={frame}
            animate={{ x: 10, y: -35 }}
            whileHover={{ scale: 1.2, rotate: -10 }}
            whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
          >
            <p>{d.text}</p>
          </Frame>
        </a>
      </div>
    </>
  ));
};

export default LinksListItems;
