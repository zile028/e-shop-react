import React from "react";
import bg from "../assets/img/header-bg.jpg";
const style = {
  backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${bg})`,
};
function Header({ title }) {
  return (
    <header style={style}>
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
