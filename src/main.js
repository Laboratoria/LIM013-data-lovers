import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/lol/lol.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);


let champion=data.data;
const obj=Object.values(champion);
console.log(champion);
console.log(obj);
//const champ = obj.forEach (El => console.log(El));
//obj.map((champ) => {
//let div=document.createElement('div');
//let img=document.createElement('img');
//let imagen=document.getElementById("imgChampions");
//imagen.innerHTML=`${champ.splash}`;
//div.appendChild(img);
//let p=document.createElement('p');
//let parrafo=document.getElementById("parrafoChampions");
//let currentDiv=document.getElementById("imgChampions");
//parrafo.innerHTML=`${champ.name}`;
//div.appendChild(p);
//console.log(imagen);
//});

//INTENTO 2
//function lolTemplate(){
    //return`
    //<div class="lol">
    //<img class 
    //`

    obj.map((champ) => {
        let currentDiv=document.getElementById("imgChampions");
        //const current=document.getElementById("imagen")
        let div=document.createElement('div');
        let img=document.createElement('img')
    
    img.src=`${champ.splash}`;
    let p=document.createElement('p');
    p.innerHTML=`${champ.name}`;
    
    currentDiv.appendChild(p);
    currentDiv.appendChild(img);
    console.log(div);
    });

