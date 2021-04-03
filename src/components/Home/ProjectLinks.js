import LinksListItems from "./LinksListItems";
import { Frame } from "framer";
const frame = {
  background: "transparent",
};
const ProjectLinks = () => {
  return (
    <>
      <div
        style={{
          padding: "50px",
          textAlign: "left",
          // background: "linear-gradient(280deg, #1B2631,#020919)",
          // color: "black",
        }}
      >
        <Frame
          height={45}
          width={85}
          // className="container "
          style={frame}
          animate={{ x: 10, y: -60 }}
          drag="x"
          dragConstraints={{ left: -1, right: 500 }}
        >
          <h1>Links</h1>
        </Frame>

        {LinksListItems()}
      </div>
    </>
  );
};

export default ProjectLinks;
