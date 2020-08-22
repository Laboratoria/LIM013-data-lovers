import order from './data.js'; //pure functions
import data from './data/pokemon/pokemon.js'; //All data
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
        let num = data.pokemon[i].num;
        let name = data.pokemon[i].name;
        let type = data.pokemon[i].type;
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
//Event for ORDER BUTTON, select by id for order by num or name
document.getElementById("order-drop-down").addEventListener("click", (e) => {
    let selector = e.target; // when you click on the first element -> selector = <li id="num1_N">Top number</li> 
    if (selector.id == "num1_N") {
        order.num1_N(data.pokemon);
    }
    if (selector.id == "numN_1") {
        order.numN_1(data.pokemon);
    }
    if (selector.id == "nameA_Z") {
        order.nameA_Z(data.pokemon);
    }
    if (selector.id == "nameZ_A") {
        order.nameZ_A(data.pokemon);
    }
    x = 0;
    document.getElementById('content').innerHTML = "";
    seePokemon(x);
    document.getElementById("count").innerHTML = x + count + " pokemones of 251";
});

/*let mediaQueryTablet = window.matchMedia("(max-width: 768px)");
mediaQueryTablet.addListener(function() {
    if (mediaQueryTablet.matches) {
        document.getElementById("header").style.backgroundColor = "red";
    } else {
        document.getElementById("header").style.backgroundColor = "yellow";
    }
});*/
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