import React, { useState } from "react";
import Pelicula from "./pelicula";
import { obtenerPeliculas } from "../Services/peliculasServices";

const Peliculas = () => {
  const [peliculas, setPeliculas] = useState([]);

  const cargarPeliculas = async () => {
    const { data: peliculas } = await obtenerPeliculas();
    setPeliculas(peliculas);
    // fetch("http://localhost:5000/api/Pelicula")
    //   .then((response) => response.json())
    //   .then((data) => setPeliculas(data));
  };
  return (
    <>
      <div>
        <h2>Peliculas</h2>
        <button onClick={() => cargarPeliculas()}>Cargar peliculas</button>
      </div>
      {peliculas.map((pelicula) => (
        <Pelicula datos={pelicula} key={pelicula.idPelicula}></Pelicula>
      ))}
    </>
  );
};

export default Peliculas;
