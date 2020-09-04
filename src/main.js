import { filterByType, sortByName, filterByName, computeByStats } from './data.js';
import data from './data/pokemon/pokemon.js';

const table = document.querySelector("#table");
const modal = document.querySelector("#modal");
const selectByName = document.querySelector("#selectByName");
const selectByType = document.querySelector("#selectByType");
const searchByName = document.querySelector("#searchByName");
const index = document.querySelector("#index");


const showByData = (array) => {
    table.innerHTML="";    

    array.forEach((item) => {
        const puntos = computeByStats(Object.values(item.stats));
        const showByItem = document.createElement("div");
        showByItem.classList.add("section2_table-item");
        showByItem.innerHTML=`
            <p class="section2-table-item_num">#${item.num}</p>
            <img class="section2-table-item_img"src=${item.img}></img>
            <p class="section2-table-item_name"> ${item.name}</p>
            <p class="section2-table-item_type"> ${item.type}</p>
            `       
        table.appendChild(showByItem);

        const showForItem = document.createElement("div");
        showForItem.classList.add("section2_modal-item");
        showForItem.style.display="none";
        showForItem.innerHTML= `
            <span id="close">X</span>
            <p class="section2-table-item_num">#${item.num}</p>
            <img class="section2-table-item_img" src=${item.img}></img>
            <p class="section2-table-item_name">name: ${item.name}</p>
            <p class="section2-table-item_type">type: ${item.type}</p>
            <p class="section2-table-item_type": ${item.resistant}</p>
            <p class="section2-table-item_type">waknesses: ${item.weaknesses}</p>
            <p class="section2-table-item_stats">attack: ${item.stats["base-attack"]}</p>
            <p class="section2-table-item_stats">defense: ${item.stats["base-defense"]}</p>
            <p class="section2-table-item_stats">stamina: ${item.stats["base-stamina"]}</p>
            <p class="section2-table-item_stats">PC: ${puntos}</p> 
             `
        modal.appendChild(showForItem);

        const closeForData = () => {
            showForItem.style.display = "none";
        }
            
        showForItem.addEventListener("click", closeForData);
    
        const openForData = () => {
            showForItem.style.display = "block";
        }
    
        showByItem.addEventListener("click", openForData); 
            
        });
};
 
//inicializando//
showByData(data.pokemon);

// filterByName//
searchByName.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
    const showForName = searchByName.value;
    const showCardName = filterByName(data.pokemon,showForName);
    showByData(showCardName);
    searchByName.value=""; 
    index.innerHTML= showForName;
    }
});

//sortByName//
selectByName.addEventListener("change", () => {
    const showByName = selectByName.value;
    const showListName = sortByName(data.pokemon,showByName);
    showByData(showListName);
    index.innerHTML= showByName;
});


// filterByType//
selectByType.addEventListener("change", () => {
    const showByType = selectByType.value;
    const showListType = filterByType(data.pokemon,showByType);
    showByData(showListType);
    if (showByType == "allTypes") {
    showByData(data.pokemon);
    }
    index.innerHTML= showByType;
});