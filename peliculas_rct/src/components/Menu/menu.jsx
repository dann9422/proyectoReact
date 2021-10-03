import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const Menu = () => {
  const history = useHistory();
  const [buscar, setBuscar] = useState("");

  const handleBuscar = (e) => {
    setBuscar(e.target.value);
  };
  return (
    <nav>
      <TextField
        name="buscar"
        value={buscar}
        onChange={(e) => handleBuscar(e)}
        placeholder="  Busca por genero,Titulo,Actores..."
        style={{
          width: 300,
          backgroundColor: "#fff",
          textAlign: "right",
          color: "#fff",
        }}
      />
      <Icon
        onClick={() => setBuscar("")}
        color="#000"
        style={{
          cursor: "pointer",
        }}
      >
        close
      </Icon>
      <Button
        variant="contained"
        onClick={() => history.push({ pathname: "/buscar/" + buscar })}
      >
        <Icon color="action">search</Icon>
        Buscar
      </Button>
      &nbsp;&nbsp;
      <Button
        variant="contained"
        onClick={() => history.push({ pathname: "/destacadas" })}
        style={{
          boxshadow: "0px 1px 12px -2px #fff",
        }}
      >
        <Icon color="action">star</Icon>
        Destacadas
      </Button>
      &nbsp;&nbsp;
      <Button
        variant="contained"
        onClick={() => history.push({ pathname: "/peliculas" })}
      >
        <Icon color="action">apps</Icon>
        Todas
      </Button>
    </nav>
  );
};

export default Menu;
