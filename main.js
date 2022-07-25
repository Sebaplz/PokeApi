const flex = document.querySelector(".flex");
const template = document.getElementById("card").content;
const clone = template.cloneNode(true);
const fragment = document.createDocumentFragment();

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

document.addEventListener("DOMContentLoaded", () => {
  let random = getRandomInt(1, 152);
  fetchData(random);
});

const fetchData = async (id) => {
  try {
    console.log(id);

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();

    console.log(data);

    const pokemon = {
      img: data.sprites.front_default,
      nombre: data.name,
    };

    pintarCard(pokemon);
  } catch (error) {
    console.log(error);
  }
};

const pintarCard = (pokemon) => {
  clone.querySelector(".card-img-top").setAttribute("src", pokemon.img);
  clone.querySelector(".card-title").innerHTML = `${pokemon.nombre}`;

  fragment.appendChild(clone);
  flex.appendChild(fragment);
};

function btnRandom() {
  location.reload();
}
