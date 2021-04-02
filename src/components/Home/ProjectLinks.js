import LinksListItems from "./LinksListItems";
import { Frame } from "framer";
const frame = {
  // background: "linear-gradient(180deg, #f08, #d0e)",
  background: "transparent",
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
        <Frame
          // width={250}
          // className="container "
          style={frame}
          animate={{ x: 10, y: -60 }}
          drag="x"
          dragConstraints={{ left: -1, right: 100 }}
        >
          <h1>Links</h1>
        </Frame>

        {LinksListItems()}
      </div>
    </>
  );
};

export default ProjectLinks;
