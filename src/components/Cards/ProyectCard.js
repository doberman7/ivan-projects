import React from "react";
import RowAndColumns from "./RowAndColumns";
import RowAndColumnsBig from "./RowAndColumnsBig";
import { useMediaQuery } from "react-responsive";

const ProyectCard = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 700px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 700px)" });
  return (
    <>
      {/* <RowAndColumnsBig />
      <RowAndColumns /> */}
      <h1>Device Test!</h1>
      {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
      {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
    </>
  );
};

export default ProyectCard;
