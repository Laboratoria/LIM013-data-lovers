import { filterByType, sortByName, filterByName, computeByStats } from './data.js';
import data from './data/pokemon/pokemon.js';

const container = document.querySelector("#container");
const containerModal = document.querySelector("#container-modal");
const selectByName = document.querySelector("#selectByName");
const selectByType = document.querySelector("#selectByType");


const showByData = (array) => {
    container.innerHTML="";    

    array.forEach((item) => {
        const pc = computeByStats(Object.values(item.stats));
        const showByItem = document.createElement("div");
        showByItem.classList.add("elemento");
        showByItem.innerHTML=`
            <p>#${item.num}</p>
            <img src=${item.img}></img>
            <p>name: ${item.name}</p>
            <p>type: ${item.type}</p>
            `       
        container.appendChild(showByItem);

        const showForItem = document.createElement("div");
        showForItem.classList.add("elemento-div");
        showForItem.style.display="none";
        showForItem.innerHTML= `
            <span class="close" id="close">&times;</span>
            <p class="num">#${item.num}</p>
            <img class="img" src=${item.img}></img>
            <p class="name">name: ${item.name}</p>
            <p class="type">type: ${item.type}</p>
            <p class="resistance">resistance: ${item.resistant}</p>
            <p class="waknesses" >waknesses: ${item.weaknesses}</p>
            <p class="attack">attack: ${item.stats["base-attack"]}</p>
            <p class="defense">defense: ${item.stats["base-defense"]}</p>
            <p class="stamina">stamina: ${item.stats["base-stamina"]}</p>
            <p class="pc">PC: ${pc}</p> 
             `
        containerModal.appendChild(showForItem);
        const closeForData = (item) => {
            showForItem.style.display = "none";
            }
            
        showForItem.addEventListener("click", closeForData);
    
        const openForData = (item) => {
            showForItem.style.display = "block";
            }
    
        showByItem.addEventListener("click", openForData); 
            
        });
};
 
//inicializando//
showByData(data.pokemon);

// filterByName//
searchByName.addEventListener("blur", () => {
    const showForName = searchByName.value;
    const showCardName = filterByName(data.pokemon,showForName);
    showByData(showCardName); 
});


//sortByName//
selectByName.addEventListener("change", () => {
    const showByName = selectByName.value;
    const showListName = sortByName(data.pokemon,showByName);
    return showByData(showListName);
});


// filterByType//
selectByType.addEventListener("change", () => {
    const showByType = selectByType.value;
    const showListType = filterByType(data.pokemon,showByType);
    showByData(showListType);
    if (showByType == "allTypes") {
        showByData(data.pokemon)};

});

