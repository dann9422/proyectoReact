/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useRef } from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper"; // coloca en dise;o como tarjeta
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import Rating from "@material-ui/lab/Rating";

const Pelicula = ({ datos }) => {
  const [botones, setBotones] = useState("");
  const favorito = useRef();

  const setFavorito = () => {
    favorito.current.style.backgroundColor = "green";
  };
  return (
    <>
      <Grid container item xs={12} sm={4} lg={3}>
        <Paper style={{ padding: 5, textAlign: "center" }}>
          <Icon color={"disabled"} style={{ cursor: "pointer" }}>
            favorite
          </Icon>
          <div>
            <img width={200} src={datos.portada}></img>
          </div>
          <div>
            <Rating value={datos.estrellas} readOnly />
          </div>

          <h2>{datos.titulo}</h2>
          <div>{datos.sinopsis}</div>
          <br />
          <div>{`Genero:${datos.genero}`}</div>
          <br />

          <div>{`Director:${datos.director}`}</div>
          <br />
          <div>{`Año:${datos.anio}`}</div>
          <hr />
          <div>
            <b>{`Precio: $ ${datos.precio}`}</b>
          </div>
          <br />
          <div>
            <Button
              variant="contained"
              color="primary"
              disabled={botones}
              onClick={() => {
                setBotones("disabled");
                alert("Has comprado esta pelicula!");
              }}
            >
              Comprar
            </Button>
            &nbsp;
            <Button
              variant="outlined"
              color="secondary"
              disabled={botones}
              onClick={() => {
                setBotones("disabled");
                setFavorito();
              }}
            >
              Agregar al carrito
            </Button>
          </div>
          <hr />
        </Paper>
      </Grid>
    </>
  );
};

export default Pelicula;
