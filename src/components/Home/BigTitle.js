import { Frame } from "framer";
import Particles from "react-particles-js";
import particlesConfig from "../config/particlesConfig";
const h1Style = {
  color: "black",
  fontFamily: "Helvetica Neue",
  fontSize: "50px",
  fontWeight: "bold",
  letterSpacing: "10px",
  lineHeight: 4,
  // textAlign: "center",
  // paddingLeft: 300,
};
const frame = {
  // background: "linear-gradient(180deg, #f08, #d0e)",
  background: "transparent",
  // display: "flex",
  // justifyContent: "center",
  // alignItems: "center",

  height: "20vh",
};

const rectanguloVerde = {
  width: "100vw",
  height: "20vh",
  /* overflow: hidden, */
  padding: "0",
  margin: "0",
  display: "flex",
  justifyContent: "center",
  // alignItems: "center",
  // alignSelf: "center",
  // background: "linear-gradient(180deg, #f08, #d0e)",
  background: "linear-gradient(180deg,#1ABC9C , #3498DB)",
};

const BigTitle = () => {
  return (
    <>
      <div style={rectanguloVerde}>
        {/* controls size of the area with bubbles */}
        <Particles width="100vw" params={particlesConfig} />
        <Frame
          // width={250}
          // className="container "
          style={frame}
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}>
          {/* <br /> */}
          <br />
          <br />
          {/* <p style={h1Style}> Hello </p> */}
          <Frame
            height={45}
            width={85}
            // className="container "
            style={frame}
            animate={{ x: 10, y: -60 }}
            drag="x"
            dragConstraints={{ left: -200, right: 200 }}>
            <p style={h1Style}>Hello</p>
          </Frame>
        </Frame>
      </div>
    </>
  );
};

export default BigTitle;
