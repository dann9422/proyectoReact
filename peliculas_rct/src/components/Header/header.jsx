import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header>
      <h1>API PELICULAS</h1>
      <br />
      <Link to="/favoritos">Favoritos</Link>
      <br />
      <Link to="/carrito">Carrito</Link>
    </header>
  );
};

export default Header;
