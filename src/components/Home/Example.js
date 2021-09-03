import React from "react";
import { useMediaPredicate } from "react-media-hook";
import ProyectCard from "../Cards/ProyectCard";

export const Example = () => {
  const biggerThan400 = useMediaPredicate("(min-width: 400px)");

  return <div>{biggerThan400 && <Example />}</div>;
};
