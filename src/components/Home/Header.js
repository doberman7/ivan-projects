import * as React from "react";
import { Avatar } from "antd";

export const Header = () => {
  return (
    <header>
      <p className="hello">Hi</p>
      <p className="hello">This are </p>
      <div className="avatar">
        <Avatar src="https://avatars.githubusercontent.com/u/23062808?s=400&u=8e2dab83bfa2b89a342788eb162a08dd9609c9c5&v=4" />
      </div>
    </header>
  );
};
