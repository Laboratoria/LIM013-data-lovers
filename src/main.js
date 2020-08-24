import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/lol/lol.js';
// import data from './data/rickandmorty/rickandmorty.js';
console.log(example, data);

let champion=data.data;
const obj=Object.values(champion);
console.log(champion);
console.log(obj);
const champ = obj.forEach (El => console.log(El));
obj.map((champ) => {
    let currentDiv=document.getElementById("imgChampions");
    
    let div=document.createElement('div');
    let img=document.createElement('img')

img.src=`${champ.splash}`;
let p=document.createElement('p');
p.innerHTML=`${champ.name}`;

currentDiv.appendChild(p);
currentDiv.appendChild(img);
console.log(div);
});

/*const list=document.getElementById("champ");
const championList = data.data;
const Card=(listData)=>{
    const arrayLol=Object.values(championList)
console.log(arrayLol);
}//
console.log(Card);


    
    document.getElementById("champ").innerHTML="hola";
    let createEl =document.createElement("a");
    let varTextNode=document.createTextNode(objectLol);
    createEl.appendChild(varTextNode);
    document.getElementById("champ").appendChild(varTextNode);*/
    
    
