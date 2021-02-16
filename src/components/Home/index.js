import React from "react";
// import { Link, Redirect } from "react-router-dom";
// import { motion } from "framer-motion";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { Item } from "../../Item";
import { List } from "../../List";
import { Header } from "../../Header";
import { Frame } from "framer";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Store({ match }) {
  let { id } = match.params;
  const imageHasLoaded = true;

  return (
    <>
      <List selectedId={id} />
      <AnimatePresence>
        {id && imageHasLoaded && <Item id={id} key="item" />}
      </AnimatePresence>
    </>
  );
}
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
  background: "linear-gradient(180deg, #f08, #d0e)",
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
};

const Home = () => {
  return (
    <>
      <Header />

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
      <br></br>
      <div className="projects">
        <p>Hi</p>
        <p>My name is Ivan</p>
        <p>I'm a Web Developer</p>
        <p>Here you can see my projects</p>
        <p>Contact me</p>
        <p>…and invite me a beer 😎 🍺</p>
      </div>
      <div className="container">
        <AnimateSharedLayout type="crossfade">
          <Router>
            <Route path={["/:id", "/"]} component={Store} />
          </Router>
        </AnimateSharedLayout>
      </div>
      <div className="contact"></div>
      <p>Contact</p>
    </>
  );
};

// export default Router;
export default Home;
