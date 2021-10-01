import servicio from "./axiosServices";

export function obtenerPeliculas() {
  return servicio.get("Pelicula/");
}
