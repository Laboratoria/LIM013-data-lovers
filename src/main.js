import { filterByType, sortByName, findByName } from './data.js';
import data from './data/pokemon/pokemon.js';


//selectByName//
const selectByName = document.querySelector("#selectByName");
selectByName.addEventListener("change", chosenByName);

function chosenByName(){
    const showByName = selectByName.value;
    console.log(sortByName(data.pokemon.showByName));
}


// selectByType//
const selectByType = document.querySelector("#selectByType");
selectByType.addEventListener("change", chosenByType);

function chosenByType() {
    const showByType = selectByType.value;
    const showListCard = (filterByType(data.pokemon,showByType));
    return showListCard.forEach(myFunction);
}

    function myFunction(item, index){
    var card = document.querySelector("#card");
    card.classList.add("clase");
    card.innerHTML=`
      <p>#${item.num}</p>
      <img src=${item.img}></img>
      <p>name: ${item.name}</p>
      <p>type: ${item.type}</p>
    `
    }