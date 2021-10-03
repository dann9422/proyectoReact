import React from "react";
import Peliculas from "../pelicula/peliculas";
import { Route } from "react-router";
import Favorito from "../Favorito/favorito";
import Carrito from "../carrito/carrito";
import Destacadas from "../pelicula/destacadas";
import Buscar from "../pelicula/buscar";
const Body = () => {
  return (
    <div>
      <section>
        <Route path="/" exact component={Peliculas}></Route>
        <Route path="/Peliculas" exact component={Peliculas}></Route>
        <Route path="/favoritos" exact component={Favorito}></Route>
        <Route path="/carrito" exact component={Carrito}></Route>
        <Route path="/destacadas" exact component={Destacadas}></Route>
        <Route path="/buscar/:valor" exact component={Buscar}></Route>
        <Route path="/buscar/" exact component={Peliculas}></Route>
      </section>
    </div>
  );
};

export default Body;
