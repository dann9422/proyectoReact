import React from "react";
import "./footer.css";
import Icon from "@material-ui/core/Icon";

const Footer = () => {
  return (
    <footer>
      <p>Ventas de Peliculas - Copyright</p>
      <Icon color="#212121" fontSize="large">
        email
      </Icon>
      &nbsp;&nbsp;
      <Icon color="#212121" fontSize="large">
        facebook
      </Icon>
    </footer>
  );
};

export default Footer;
