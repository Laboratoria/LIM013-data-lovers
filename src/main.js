import { filterByType, sortByName, filterByName, computeByStats } from './data.js';
import data from './data/pokemon/pokemon.js';

const container = document.querySelector("#container");
const searchByName = document.querySelector("#searchByName");
const selectByName = document.querySelector("#selectByName");
const selectByType = document.querySelector("#selectByType");



const showByData = (array) => {
    container.innerHTML="";    

    array.forEach((item, index, array) => {
        
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
        
        const showForData = (array) => {
            const showForItem = document.createElement("div");
            showForItem.classList.add("elemento-div");
            showForItem.style.display = "block";
            showForItem.innerHTML=`
                <p>#${item.num}</p>
                <img src=${item.img}></img>
                <p>name: ${item.name}</p>
                <p>type: ${item.type}</p>
                <p>resisntant: ${item.resistant}</p>
                <p>waknesses: ${item.weaknesses}</p>
                <p>attack: ${item.stats["base-attack"]}
                <p>defense: ${item.stats["base-defense"]}
                <p>stamina: ${item.stats["base-stamina"]}
                <p>PC: ${pc}           
                `    
            showByItem.appendChild(showForItem);     

            const closeForData = (i) => {
                showForItem.style.display = "none";
            }
            
            showForItem.addEventListener("click", closeForData);
        }

        showByItem.addEventListener("click", showForData);          
    });     
}










 
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


