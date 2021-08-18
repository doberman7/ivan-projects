import React from "react";

import { Header } from "./Header";

import ProjectLinks from "./ProjectLinks";
import Contact from "./Contact";
import Text from "./Text";
import BigTitle from "./BigTitle";
import Rectangles from "./Rectangles";
import ProyectCard from "../Cards/ProyectCard";

const Home = () => {
  return (
    <>
      <Header />
      <BigTitle />

      <Text />

      <Rectangles />
      <ProyectCard />
      <ProjectLinks />
      <Contact />
    </>
  );
};

// export default Router;
export default Home;
