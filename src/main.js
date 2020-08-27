import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/lol/lol.js';
// import data from './data/rickandmorty/rickandmorty.js';
console.log(example, data);

import { filteredbyClass } from './data.js';

window.addEventListener("load", () => {
    const champion = data.data;
    const obj = Object.values(champion);
    console.log(champion);
    //console.log(obj);
    obj.map((champ) => {
        let currentDiv = document.getElementById("imgChampions");
        let div = document.createElement('div');
        let img = document.createElement('img');
        img.src = `${champ.splash}`;
        let p = document.createElement('p');
        p.innerHTML = `${champ.name}`;
        currentDiv.appendChild(p);
        currentDiv.appendChild(img);
        console.log(div);
    });
});

const menuRol = document.querySelectorAll('#categoria a');
menuRol.forEach((element) => {
    element.addEventListener("click", (event) => {
        event.preventDefault();
        menuRol.forEach((link) => link.classList.remove('active'));
        event.target.classList.add('active');

    })
});



menuRol.forEach((el) => {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        const term = el.getAttribute('data-value');
        console.log("term");
        const champion = data.data;
        const obj = Object.values(champion);
        const championByType = filteredbyClass(obj, term);
        console.log(championByType);

    });
});


//const a=document.querySelector('.form-groups-rol');
//const b=document.querySelector('.form-groups-rol button');
//a.querySelector('.rol-type2').classList.remove('.rol-type2');
//b[0].classList.add('.rol-type2');

/*const filterClasses=(element) => {
    element.addEventListener('click',() => {
        const term=element.getAttribute('todo');
        console.log(term);
        const filteredChampions=filteredbyClass(champion,term);
        if(term==='todo'){
            functionCardsStructure(champion);

        } else {
            functionCardsStructure(filteredChampions);
        }
});
};*/
//a.forEach (button => filterClasses(button));