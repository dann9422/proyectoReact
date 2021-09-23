import React from "react";
import Pelicula from "./pelicula";

const Peliculas = () => {
  const peliculas = [
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
  ];
  return (
    <>
      <div>
        <h2>Peliculas</h2>
      </div>
      <div>peliculas contenido</div>
      {peliculas.map((pelicula) => (
        <Pelicula datos={pelicula}></Pelicula>
      ))}
    </>
  );
};

export default Peliculas;
