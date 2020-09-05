const namePokemon = localStorage.getItem('namePokemon');

let imgPokemon = document.createElement("img");
document.getElementById("img-pokemon").appendChild(imgPokemon);

let imgPokemonEv1 = document.createElement("img");
document.getElementById("overview").appendChild(imgPokemonEv1);
let imgPokemonEv2 = document.createElement("img");
document.getElementById("overview").appendChild(imgPokemonEv2);


document.getElementById("stats").style.display = "none";
document.getElementById("abilities").style.display = "none";

document.getElementById("button-overview").addEventListener('click', () => {
    document.getElementById("stats").style.display = "none";
    document.getElementById("abilities").style.display = "none";
    document.getElementById("overview").style.display = "block";
});
document.getElementById("buttton-stats").addEventListener('click', () => {
    document.getElementById("stats").style.display = "block";
    document.getElementById("abilities").style.display = "none";
    document.getElementById("overview").style.display = "none";
});
document.getElementById("button-abilities").addEventListener("click", () => {
    document.getElementById("stats").style.display = "none";
    document.getElementById("abilities").style.display = "block";
    document.getElementById("overview").style.display = "none";
});

// VISUALIZAR CON ARCHIVO .JSON

let pokemones = [];
fetch("../data/pokemon/pokemon.json")
    .then(data => data.json())
    .then(data => {
        pokemones = data.pokemon;
        let pokemon = pokemones.filter((pokemon) => pokemon.name.includes(namePokemon));
        pokemon = pokemon[0];
        basicData(pokemon);
        abilities(pokemon);
        overview(pokemon);
    });

let basicData = (pokemon) => {
    const num = pokemon.num;
    imgPokemon.setAttribute("src", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + num + ".png");
    imgPokemon.setAttribute("class", "img-pokemon-img")
    document.getElementById("num").innerHTML = "# " + pokemon.num;
    document.getElementById("name").innerHTML = pokemon.name;
    document.getElementById("about").innerHTML = pokemon.about;
    document.getElementById("container").classList.add(pokemon.type[0]);
};

let abilities = (pokemon) => {
    document.getElementById("fast-attacks").classList.add(pokemon.type[0]);
    document.getElementById("resistant").classList.add(pokemon.type[0]);
    document.getElementById("weaknesses").classList.add(pokemon.type[0]);
    document.getElementById("special-attacks").classList.add(pokemon.type[0]);
    let resistants = pokemon.resistant;
    resistants.forEach(resistant => {
        let span = document.createElement('span');
        span.setAttribute("class", "resistant");
        span.classList.add(resistant);
        document.getElementById("span-resistant").appendChild(span);
        span.innerHTML = resistant;
    });
    let weaknesses = pokemon.weaknesses;
    weaknesses.forEach(weaknesse => {
        let span = document.createElement('span');
        span.setAttribute("class", "resistant");
        span.classList.add(weaknesse);
        document.getElementById("span-weaknesses").appendChild(span);
        span.innerHTML = weaknesse;
    });
};

let overview = (pokemon) => {

    let evolution1 = pokemon.evolution;
    evolution1 = evolution1["next-evolution"];
    let num1 = evolution1[0].num;
    let pos = evolution1[0];
    let evolution2 = pos["next-evolution"];
    let num2 = evolution2[0].num;

    imgPokemonEv1.setAttribute("src", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + num1 + ".png");
    imgPokemonEv1.setAttribute("class", "pokemon-evolucion");
    imgPokemonEv2.setAttribute("src", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + num2 + ".png");
    imgPokemonEv2.setAttribute("class", "pokemon-evolucion");

}