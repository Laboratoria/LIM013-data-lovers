import { filterByType, sortByName, findByName } from './data.js';
import data from './data/pokemon/pokemon.js';


function showPokemon(item){
    const showByItem = document.createElement("div");
    showByItem.classList.add("elemento");
    showByItem.innerHTML=`
        <p>#${item.num}</p>
        <img src=${item.img}></img>
        <p>name: ${item.name}</p>
        <p>type: ${item.type}</p>
        `
    const container = document.querySelector("#container")
    container.appendChild(showByItem);
    return showByItem;
}

//selectByName//
const selectByName = document.querySelector("#selectByName");
selectByName.addEventListener("change", chosenByName);

function chosenByName(){
    const showByName = selectByName.value;
    const showListName = (sortByName(data.pokemon,showByName));
    return showListName.forEach(showPokemon);
}


// selectByType//
const selectByType = document.querySelector("#selectByType");
selectByType.addEventListener("change", chosenByType);

function chosenByType() {
    const showByType = selectByType.value;
    const showListType = (filterByType(data.pokemon,showByType));
    return showListType.forEach(showPokemon);
}
    
