import React, { useState } from "react";
import Pelicula from "./pelicula";

const Peliculas = () => {
  const [peliculas, setPeliculas] = useState([]);

  /* const peliculas = [
    {
      titulo: "terminator",
      genero: "accion",
      director: "james cameron",
      anio: "1999",
    },
    {
      titulo: "John wick",
      genero: "accion",
      director: "james cameron",
      anio: "2010",
    },
    {
      titulo: "Avengers",
      genero: "accion",
      director: "john wig",
      anio: "2020",
    },
  ];*/

  const cargarPeliculas = () => {
    fetch("http://localhost:5000/api/Pelicula")
      .then((response) => response.json())
      .then((data) => setPeliculas(data));
  };
  return (
    <>
      <div>
        <h2>Peliculas</h2>
        <button onClick={() => cargarPeliculas()}>Cargar peliculas</button>
      </div>
      {peliculas.map((pelicula) => (
        <Pelicula datos={pelicula}></Pelicula>
      ))}
    </>
  );
};

export default Peliculas;
