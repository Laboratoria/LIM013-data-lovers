
//Usaremos este import cuando tengamos funciones en data.js
import { orderAsc, orderDesc, orderAscName, orderDescName} from './data.js';
import data from './data/pokemon/pokemon.js';

let x = 0;
let count = 8;

//Función para agregar etiquetas HTML a index con data
let listPokemon = (num, name, type) => {
    let pokemon = document.createElement('div');
    let imgPokemon = document.createElement('img');
    let infoPokemon = document.createElement('div');
    infoPokemon.innerHTML += "<span> <strong> # " + num + "</strong>" + " " + name + "</span>";
    pokemon.setAttribute('class', 'pokemon');
    infoPokemon.setAttribute('class', 'info-pokemon');
    imgPokemon.setAttribute('src', "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + num + ".png");
    imgPokemon.setAttribute('class', 'img-pokemon');
    imgPokemon.setAttribute('alt', name);
    imgPokemon.setAttribute('title', name);
    for (let j = 0; j < type.length; j++) {
        let imgType = new Array();
        imgType[j] = document.createElement('img'); // <img/>
        imgType[j].setAttribute('src', 'type-icon/' + type[j] + '.png'); //<img src="type-icon/grass.png"/>
        imgType[j].setAttribute('class', 'type'); //<img src="type-icon/grass.png" class="type/>"
        imgType[j].setAttribute('title', type[j]);
        infoPokemon.appendChild(imgType[j]);
    }

    document.getElementById('content').appendChild(pokemon);
    pokemon.appendChild(imgPokemon);
    pokemon.appendChild(infoPokemon);

}


let seePokemon = (x) => {
    for (let i = x; i <= x + count - 1; i++) {
        let num = data.pokemon[i].num;
        let name = data.pokemon[i].name;
        let type = data.pokemon[i].type;
        listPokemon(num, name, type);
    }

}

window.onload = seePokemon(x);

document.getElementById("more").addEventListener("click", () => {
    x = x + count;
    seePokemon(x);
    document.getElementById("count").innerHTML = x + count + " pokemones of 251";
});

document.getElementById("lower-number").addEventListener('click', () => {
    x = 0;
    count = 8;
    orderDesc(data.pokemon);
    document.getElementById('content').innerHTML = "";
    seePokemon(x);
    document.getElementById("count").innerHTML = x + count + " pokemones of 251";
});

document.getElementById("top-number").addEventListener('click', () => {
    x = 0;
    count = 8;
    orderAsc(data.pokemon);
    document.getElementById('content').innerHTML = "";
    seePokemon(x);
    document.getElementById("count").innerHTML = x + count + " pokemones of 251";
});

document.getElementById("order-asc").addEventListener('click', () => {
    x = 0;
    count = 8;
    orderAscName(data.pokemon);
    document.getElementById('content').innerHTML = "";
    seePokemon(x);
    document.getElementById("count").innerHTML = x + count + " pokemones of 251";
});
document.getElementById("order-desc").addEventListener('click', () => {
    x = 0;
    count = 8;
   orderDescName(data.pokemon);
    document.getElementById('content').innerHTML = "";
    seePokemon(x);
    document.getElementById("count").innerHTML = x + count + " pokemones of 251";
});
