import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
const importData = data.pokemon;

console.log(example, data);

---------------------------------------------
import data from "./harry-potter.js";

const showListOfCharacters = (charactersArr) => {
  const containerElement = document.getElementById("app");
  let listOfCharactersTemplate = "";

  charactersArr.forEach((characterObj) => {
    const liElement = `
      <li>
        ${characterObj.name}
      </li>
    `;
    listOfCharactersTemplate = listOfCharactersTemplate + liElement;
  });

  containerElement.innerHTML = listOfCharactersTemplate;
};

showListOfCharacters(data);
