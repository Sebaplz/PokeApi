const botonBuscar = document.getElementById("btnBuscar");
const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

const min = 1;
const max = 152;

botonBuscar.addEventListener("click", getRandomInt);

function getRandomInt() {
  let idRandom = Math.floor(Math.random() * (max - min)) + min;
  return buscarPokemon(idRandom);
}

function buscarPokemon(idRandom) {
  fetch(`${baseUrl}${idRandom}`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("nombrePokemon").innerHTML = data.name;
      const pokemonImagen = document.querySelector("#imagenPokemon");
      pokemonImagen.src = data.sprites.front_default;
    });
}
