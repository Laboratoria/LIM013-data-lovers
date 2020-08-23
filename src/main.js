import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/lol/lol.js';
// import data from './data/rickandmorty/rickandmorty.js';
console.log(example, data);
const pag2=document.getElementById("championes")

pag2.addEventListener("click",champFunction)
function champFunction() {
    document.getElementById("home").style.display="none"
    document.getElementById("championsPage").style.display="block"
    const championList = data.data;
    
    let list=document.getElementById("list").innerHTML=`${championList}`;
    let createEl =document.createElement("a");
    let varTextNode=document.createTextNode(championList);
    createEl.appendChild(varTextNode);
    document.getElementById("list").appendChild(varTextNode);
    
    
}
/*
const list = document.getElementById('list');
const input = document.querySelector('#searchInputs');

input.addEventListener('keyup', (evt) => {
    const term = evt.target.value.toLowerCase();
    const filteredChampions = filterByName(championList, term);

    const errorMessage = document.querySelector('#error');
    if (filteredChampions.length === 0) {
        errorMessage.classList.remove('hidden');
    } else {
        errorMessage.classList.add('hidden');
    }
    list.innerHTML = '';
}) */
