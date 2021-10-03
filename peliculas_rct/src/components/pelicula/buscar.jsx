import React, { useState, useEffect } from "react";
import { BuscarPor } from "../Services/peliculasServices";
import Grid from "@material-ui/core/Grid";
import Pelicula from "./pelicula";
const Buscar = (props) => {
  const [peliculas, setPelicula] = useState([]);

  const handleBuscar = async (buscar) => {
    const { data: peliculas } = await BuscarPor(buscar);
    setPelicula(peliculas);
  };
  useEffect(() => {
    handleBuscar(props.match.params.valor);
  }, [props.match.params.valor]);
  return (
    <>
      <h2>Resultados de la busqueda</h2>
      <Grid container spacing={2}>
        {peliculas.map((pelicula) => (
          <Pelicula datos={pelicula} key={pelicula.idPelicula}></Pelicula>
        ))}
      </Grid>
    </>
  );
};

export default Buscar;
