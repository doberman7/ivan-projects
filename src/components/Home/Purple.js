import { Frame } from "framer";

const h1Style = {
  color: "#111",
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
};

const title = {
  width: "100vw",
  height: "35vh",
  /* overflow: hidden, */
  padding: "0",
  margin: "0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(180deg, #f08, #d0e)",
  // background: "linear-gradient(180deg, #337DFF, #0FC5A7)",
};

const Purple = () => {
  return (
    <>
      <div style={title}>
        <Frame
          width={250}
          // className="container "
          style={frame}
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
        >
          <p style={h1Style}> Projects</p>
        </Frame>
      </div>
    </>
  );
};

export default Purple;
