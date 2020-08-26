import { filterByType, sortByName, filterByName, computeByStats } from './data.js';
import data from './data/pokemon/pokemon.js';


const showByData = (array) => {
    container.innerHTML="";    
    array.forEach((item, index, array) => {
        const showByItem = document.createElement("div");
        showByItem.classList.add("elemento");
        showByItem.innerHTML=`
            <p>#${item.num}</p>
            <img src=${item.img}></img>
            <p>name: ${item.name}</p>
            <p>type: ${item.type}</p>
            `
            var pc=parseInt(item.stats["base-attack"]) 
            +parseInt(item.stats["base-defense"])+parseInt(item.stats["base-stamina"]);
            console.log(pc);


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


// console.log(data.pokemon[0].name);
// console.log(data.pokemon[0].stats);
// console.log(Object.keys(data.pokemon[0].stats));
// console.log(Object.values(data.pokemon[0].stats)[0]);

// let suma = 
// parseInt(Object.values(data.pokemon[0].stats[0])+ 
// parseInt(Object.values(data.pokemon[0].stats)[1])+
// parseInt(Object.values(data.pokemon[0].stats)[2]);
// console.log(suma);

// var lego = [1,2,3];
// console.log(sumaByStats(lego));

