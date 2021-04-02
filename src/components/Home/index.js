import React from "react";

import { Header } from "./Header";

import ProjectLinks from "./ProjectLinks";
import Contact from "./Contact";
import Text from "./Text";
import BigTitle from "./BigTitle";
import Rectangles from "./Rectangles";

const Home = () => {
  return (
    <>
      <Header />
      <BigTitle />

      <Text />

      <Rectangles />
      <ProjectLinks />
      <Contact />
    </>
  );
};

// export default Router;
export default Home;
