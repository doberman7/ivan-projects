import { Frame } from "framer";

const h1Style = {
  color: "black",
  fontFamily: "Helvetica Neue",
  fontSize: " 50px",
  fontWeight: "bold",
  letterSpacing: "-1px",
  lineHeight: 1,
  // textAlign: "rigth",
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
          <p style={h1Style}> Hello </p>
        </Frame>
      </div>
    </>
  );
};

export default BigTitle;
