import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Icon from "@material-ui/core/Icon";
import Badge from "@material-ui/core/Badge";
const Header = () => {
  return (
    <header>
      <h1>API PELICULAS</h1>
      <br />
      <Link to="/favoritos">
        <Icon color="action" fontSize="large">
          favorite
        </Icon>
      </Link>
      <Badge badgeContent={2} color="secondary"></Badge>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <Link to="/carrito">
        <Icon color="action" fontSize="large">
          shopping_cart
        </Icon>
      </Link>
      <Badge badgeContent={1} color="primary"></Badge>
    </header>
  );
};

export default Header;
