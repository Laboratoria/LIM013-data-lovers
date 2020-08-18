import data from '../src/data/pokemon/pokemon.js';

export let dataTest= ()=>{
for (let i = 10 ; i <= 10; i++) {
    let num = data.pokemon[i].num;
    let name = data.pokemon[i].name;
    
    return num, name;
}}
//console.log(dataTest);