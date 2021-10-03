import servicio from "./axiosServices";

export function obtenerPeliculas() {
  return servicio.get("Pelicula/");
}

export function BuscarPor(buscar) {
  return servicio.get("Pelicula/BuscarPor/" + buscar);
}

export function GetDestacadas(estrellas) {
  return servicio.get("Pelicula/GetDestacadas/" + estrellas);
}
