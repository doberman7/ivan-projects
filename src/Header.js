import * as React from "react";
import { Avatar } from "react-lorem-ipsum";

export const Header = () => {
  let today = new Date(),
    date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

  return (
    <header>
      <span className="date">{date}</span>
      <h1>Ivan's</h1>
      <div className="avatar">
        <Avatar />
      </div>
    </header>
  );
};
