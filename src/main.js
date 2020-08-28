import { order } from './data.js'; //pure functions
import { filter } from './data.js';
import data from './data/pokemon/pokemon.js'; //All data
let newData = data.pokemon;
let valuetype = new Array();
//Global variable
let x = 0; //to for seePokemon (i=x) and then add + count
const count = 8; //to show pokemons 8 by 8 
//Function to add HTML tags to index with data
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
    //for all pokemon types
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

//get necessary data
let seePokemon = (x) => {
    for (let i = x; i <= x + count - 1; i++) {
        let num = newData[i].num;
        let name = newData[i].name;
        let type = newData[i].type;
        listPokemon(num, name, type);
    }
}

//when the page loads, it shows the pokemon from 0 to "count"
window.onload = seePokemon(x);

//event for the SEE MORE BUTTON, "x" increases by 8
document.getElementById("more").addEventListener("click", () => {
    x = x + count;
    seePokemon(x);
    document.getElementById("count").innerHTML = x + count + " pokemones of 251";
});
//load page
const restart = () => {
    x = 0;
    document.getElementById('content').innerHTML = "";
    seePokemon(x);
    document.getElementById("count").innerHTML = x + count + " pokemones of 251";
};
//Event for ORDER BUTTON, select by id for order by num or name
document.getElementById("order-drop-down").addEventListener("click", (e) => {
    let selector = e.target; // when you click on the first element -> selector = <li id="num1_N">Top number</li> 
    if (selector.id == "num1_N") {
        order.num1_N(newData);
    }
    if (selector.id == "numN_1") {
        order.numN_1(newData);
    }
    if (selector.id == "nameA_Z") {
        order.nameA_Z(newData);
    }
    if (selector.id == "nameZ_A") {
        order.nameZ_A(newData);
    }
    restart();
});

//STYLES
let mediaQueryTablet = window.matchMedia("(max-width: 768px)");
let checkbox = document.getElementById('box-icon-menu');
const search = document.getElementById("search");
window.addEventListener("resize", function() {
    if (mediaQueryTablet.matches) {
        checkbox.addEventListener('change', function() {
            const isChecked = document.getElementById('box-icon-menu').checked;
            if (isChecked && mediaQueryTablet.matches) {
                document.getElementById('ul-menu').appendChild(search);
            }
        });
    } else {
        const nodoNav = document.getElementById("nav-drop");
        document.getElementById('header').insertBefore(search, nodoNav);
    }
});

document.getElementById("select-region").addEventListener('change', () => {
    let value = document.getElementById("select-region").value;
    let region = filter.region(data.pokemon, value);
    newData = region;
    restart();
});

const functionFilter = (valuetype) => {
    console.log(valuetype);
    let type = filter.type(data.pokemon, valuetype);
    console.log(data.pokemon);

    newData = type;
    console.log(newData);
    restart();
}
console.log(valuetype);
document.getElementById("select-type").addEventListener('change', () => {
    if (valuetype[0] == null || valuetype[1] == null) {
        if (valuetype[0] == null) {
            valuetype[0] = (document.getElementById("select-type").value);
            buttonClose(0, valuetype[0]);
        } else {
            valuetype[1] = (document.getElementById("select-type").value);
            buttonClose(1, valuetype[1]);
        }
    } else {
        alert('You can only choose two types');
    }
    functionFilter(valuetype);
});


const buttonClose = (id, value) => {
    let labelP = document.createElement('p');
    labelP.id = "type" + id;
    labelP.innerHTML = value;
    let labelSpan = document.createElement('span');
    labelSpan.setAttribute('class', 'close');
    labelSpan.innerHTML = "x";
    document.getElementById("labelToFilter").appendChild(labelP);
    labelP.appendChild(labelSpan);
    labelSpan.addEventListener('click', close = () => {
        labelP.parentNode.removeChild(labelP);
        if (valuetype.length == 1) {
            valuetype.splice(0, 1);
            functionFilter(valuetype);

        } else {
            valuetype.splice(id, 1);
            functionFilter(valuetype);
        }
    });
};


document.getElementById("select-weakness").addEventListener('change', () => {
    let value = new Array();
    value = document.getElementById("select-weakness").value;
    let weakness = filter.weakness(data.pokemon, value);
    newData = weakness;
    console.log(newData);
    restart();
});