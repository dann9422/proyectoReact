import React from "react";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
const Menu = () => {
  return (
    <nav>
      <TextField
        name="buscar"
        placeholder="  Busca por genero,Titulo,Actores..."
        style={{
          width: 300,
          backgroundColor: "#fff",
          textAlign: "right",
          color: "#fff",
        }}
      />
      <Icon
        color="#000"
        style={{
          cursor: "pointer",
        }}
      >
        close
      </Icon>
      <Button variant="contained">
        <Icon color="action">search</Icon>
        Buscar
      </Button>
      &nbsp;&nbsp;
      <Button
        variant="contained"
        style={{
          boxshadow: "0px 1px 12px -2px #fff",
        }}
      >
        <Icon color="action">star</Icon>
        Destacadas
      </Button>
      &nbsp;&nbsp;
      <Button variant="contained">
        <Icon color="action">apps</Icon>
        Todas
      </Button>
    </nav>
  );
};

export default Menu;
