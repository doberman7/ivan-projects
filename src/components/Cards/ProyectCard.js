import React from "react";
import Project from "./Project";
import ProjectBig from "./ProjectBig";
import { useMediaQuery } from "react-responsive";

const ProyectCard = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 700px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 700px)" });
  return (
    <>
      {isDesktopOrLaptop && <Project />}
      {isTabletOrMobile && <ProjectBig />}
    </>
  );
};

export default ProyectCard;
