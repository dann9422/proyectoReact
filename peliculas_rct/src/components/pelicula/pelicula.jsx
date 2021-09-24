import React, { useState, useRef } from "react";

const Pelicula = ({ datos }) => {
  const [botones, setBotones] = useState("");
  const favorito = useRef();

  const setFavoritos = () => {
    favorito.current.style.backgroundColor = "green";
  };
  return (
    <>
      <div>
        <button
          ref={favorito}
          style={{ backgroundColor: "yellow" }}
          onClick={() => {
            setFavoritos();
          }}
        >
          Favorito
        </button>
      </div>
      <div>{datos.titulo}</div>
      <div>{datos.genero}</div>
      <div>{datos.director}</div>
      <div>{datos.anio}</div>
      <hr />
      <div>
        <button
          disabled={botones}
          onClick={() => {
            setBotones("disabled");
            alert("Has comprado esta pelicula!");
          }}
        >
          Comprar
        </button>
        <button
          disabled={botones}
          onClick={() => {
            setBotones("disabled");
          }}
        >
          Agregar al carrito
        </button>
      </div>
      <hr />
    </>
  );
};

export default Pelicula;
