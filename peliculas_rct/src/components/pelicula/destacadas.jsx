import React, { useState, useEffect } from "react";
import { GetDestacadas } from "../Services/peliculasServices";
import Pelicula from "./pelicula";
import Grid from "@material-ui/core/Grid";

const Destacadas = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    cargarPeliculas();
  }, []);

  const cargarPeliculas = async () => {
    const { data: destacadas } = await GetDestacadas(5);
    console.log(destacadas);
    setPeliculas(destacadas);
  };
  return (
    <>
      <h2>Peliculas destacadas</h2>
      <Grid container spacing={2}>
        {peliculas.map((pelicula) => (
          <Pelicula datos={pelicula} key={pelicula.idPelicula}></Pelicula>
        ))}
      </Grid>
    </>
  );
};

export default Destacadas;
