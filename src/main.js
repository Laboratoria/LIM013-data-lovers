import { filterByType, sortByName, filterByName } from './data.js';
import data from './data/pokemon/pokemon.js';


const showByData = (array) => {
    container.innerHTML="";    
    array.forEach((item) => {
        const showByItem = document.createElement("div");
        showByItem.classList.add("elemento");
        showByItem.innerHTML=`
            <p>#${item.num}</p>
            <img src=${item.img}></img>
            <p>name: ${item.name}</p>
            <p>type: ${item.type}</p>
            `;  
        const container = document.querySelector("#container");
        container.appendChild(showByItem);
    });
};

//inicializando//
showByData(data.pokemon);

//sortByName//
const selectByName = document.querySelector("#selectByName");
selectByName.addEventListener("change", () => {
    const showByName = selectByName.value;
    const showListName = sortByName(data.pokemon,showByName);
    return showByData(showListName);
});

// filterByType//
const selectByType = document.querySelector("#selectByType");
selectByType.addEventListener("change", () => {
    const showByType = selectByType.value;
    const showListType = filterByType(data.pokemon,showByType);
    showByData(showListType);
});

// filterByName//
const searchByName = document.querySelector("#searchByName");
searchByName.addEventListener("blur", () => {
    const showForName = searchByName.value;
    const showCardName = filterByName(data.pokemon,showForName);
    showByData(showCardName); 
});







