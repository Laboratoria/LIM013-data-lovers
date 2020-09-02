import { order } from "./data.js"; //pure functions
import { filter } from "./data.js";

import data from "./data/pokemon/pokemon.js"; //All data
let newData = data.pokemon;
let valuetype = [];
let valueregion = null;
//Global variable
let x = 0; //to for seePokemon (i=x) and then add + count
const count = 8; //to show pokemons 8 by 8

//Function to add HTML tags to index with data
let listPokemon = (num, name, type) => {
  let pokemon = document.createElement("div");
  let imgPokemon = document.createElement("img");
  let infoPokemon = document.createElement("div");
  infoPokemon.innerHTML +=
    "<span> <strong> # " + num + "</strong>" + " " + name + "</span>";
  pokemon.setAttribute("class", "pokemon");
  infoPokemon.setAttribute("class", "info-pokemon");
  imgPokemon.setAttribute(
    "src",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + num + ".png"
  );
  imgPokemon.setAttribute("class", "img-pokemon");
  imgPokemon.setAttribute("alt", name);
  imgPokemon.setAttribute("title", name);
  //for all pokemon types
  for (let j = 0; j < type.length; j++) {
    let imgType = new Array();
    imgType[j] = document.createElement("img"); // <img/>
    imgType[j].setAttribute("src", "type-icon/" + type[j] + ".png"); //<img src="type-icon/grass.png"/>
    imgType[j].setAttribute("class", "type"); //<img src="type-icon/grass.png" class="type/>"
    imgType[j].setAttribute("title", type[j]);
    infoPokemon.appendChild(imgType[j]);
  }
  document.getElementById("content").appendChild(pokemon);
  pokemon.appendChild(imgPokemon);
  pokemon.appendChild(infoPokemon);
};

//get necessary data
let seePokemon = (x) => {
  document.getElementById("count").innerHTML =
    newData.length + " Pokemons found";
  for (let i = x; i < x + count; i++) {
    let num = newData[i].num;
    let name = newData[i].name;
    let type = newData[i].type;
    listPokemon(num, name, type);
  }
};

//when the page loads, it shows the pokemon from 0 to "count"
window.onload = seePokemon(x);

//event for the SEE MORE BUTTON, "x" increases by 8
document.getElementById("more").addEventListener("click", () => {
  x = x + count;
  seePokemon(x);
});

const noMatches = () => {
  document.getElementById("content").innerHTML = "";
  let box = document.createElement("div");
  let matches0 = document.createElement("p");
  box.setAttribute("class", "no-matches");
  matches0.innerHTML = "No matches found";
  document.getElementById("content").appendChild(box);
  box.appendChild(matches0);
  document.getElementById("count").innerHTML = "0 pokemons";
};

//load page
const restart = () => {
  x = 0;
  document.getElementById("content").innerHTML = "";
  seePokemon(x);
};
//Event for ORDER BUTTON, select by id for order by num or name
document.getElementById("order-drop-down").addEventListener("click", (e) => {
  let selector = e.target; // when you click on the first element -> selector = <li id="num1_N">Top number</li>
  if (selector.id == "num1_N") {
    order.num1_N(newData);
  }
  if (selector.id == "numN_1") {
    order.numN_1(newData);
  }
  if (selector.id == "nameA_Z") {
    order.nameA_Z(newData);
  }
  if (selector.id == "nameZ_A") {
    order.nameZ_A(newData);
  }
  restart();
});

document.getElementById("select-region").addEventListener("click", () => {
  if (document.getElementById("region3")) {
    alert("Remove previous filter");
  } else {
    valueregion = document.getElementById("select-region").value;
    buttonClose(3, valueregion, "region");
    filterRegion(valueregion);
  }
});

const filterRegion = (valueregion) => {
  let region = filter.region(newData, valueregion);
  if (region.length == 0) {
    noMatches();
  } else {
    newData = region;
    restart();
    return newData;
  }
};

const functionFilter = (valuetype) => {
  newData = filter.type(newData, valuetype);
  if (newData == 0) {
    noMatches();
  } else {
    restart();
    return newData;
  }
};

document.getElementById("select-type").addEventListener("click", () => {
  if (valuetype[0] == null || valuetype[1] == null) {
    if (valuetype[0] == null) {
      valuetype[0] = document.getElementById("select-type").value;
      buttonClose(0, valuetype[0], "type");
    } else {
      valuetype[1] = document.getElementById("select-type").value;
      buttonClose(1, valuetype[1], "type");
    }
  } else {
    alert("You can only choose two types");
  }
  functionFilter(valuetype);
});

const buttonClose = (id, value, name) => {
  let labelP = document.createElement("p");
  labelP.id = name + id;
  labelP.setAttribute("class", "pToFilter");
  if (name == "type") {
    labelP.innerHTML = "<strong> Type: </strong> " + value;
  } else {
    labelP.innerHTML = "<strong> Region: </strong> " + value;
  }
  let labelSpan = document.createElement("span");
  labelSpan.setAttribute("class", "close");
  labelSpan.innerHTML = "X";
  document.getElementById("labelToFilter").appendChild(labelP);
  labelP.appendChild(labelSpan);
  labelSpan.addEventListener("click", () => {
    labelP.parentNode.removeChild(labelP);
    if (labelP.id == "region3") {
      valueregion = null;
      newData = data.pokemon;
      functionFilter(valuetype);
    } else if (valuetype.length == 1) {
      valuetype.splice(0, 1);
      newData = data.pokemon;
      filterRegion(valueregion);
    } else if (valuetype.length > 1) {
      valuetype.splice(id, 1);
      newData = data.pokemon;
      functionFilter(valuetype);
      alert(valuetype);
      //filterRegion(valueregion);
      //alert(valueregion);
    }
    return newData;
  });
};

//const input= document.querySelector("input");

/*
function valueInput(e) {
    search.textContent= e.target.value;

}
*/
document.getElementById("inputSearch").addEventListener("keyup", () => {
  const searchValue =document.getElementById("inputSearch").value;
  console.log(searchValue);
  const searhPokemon = filter.searchByName(data.pokemon, searchValue);
  newData = searhPokemon;
  if(newData.length ===0){
      noMatches();
  }else{
  console.log(newData);
  restart();
  }
});
