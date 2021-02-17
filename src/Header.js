import * as React from "react";
import { Avatar, Image } from "antd";

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
        <Avatar src="https://avatars.githubusercontent.com/u/23062808?s=400&u=8e2dab83bfa2b89a342788eb162a08dd9609c9c5&v=4" />
      </div>
    </header>
  );
};
