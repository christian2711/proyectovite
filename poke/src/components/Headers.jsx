import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/poke.png";
export default function () {
  return (
    <header className="header">
      <Link className="icon" to={"/"}>
        <img src={Logo} alt="" />
      </Link>
      <nav>
        <Link to={"/"}>Lista de pokemones</Link>
       
      </nav>
    </header>
  );
}
