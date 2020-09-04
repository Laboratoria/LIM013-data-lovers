const namePokemon = localStorage.getItem('namePokemon');

let imgPokemon = document.createElement("img");
document.getElementById("img-pokemon").appendChild(imgPokemon);

// VISUALIZAR CON ARCHIVO .JSON

let pokemones = [];
fetch("../data/pokemon/pokemon.json")
    .then(data => data.json())
    .then(data => {
        pokemones = data.pokemon;
        let pokemon = pokemones.filter((pokemon) => pokemon.name.includes(namePokemon));
        basicData(pokemon);
    });

let basicData = (pokemon) => {
    const num = pokemon[0].num;
    imgPokemon.setAttribute("src", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + num + ".png");
    imgPokemon.setAttribute("class", "img-pokemon-img")
    document.getElementById("num").innerHTML = "# " + pokemon[0].num;
    document.getElementById("name").innerHTML = pokemon[0].name;
    document.getElementById("about").innerHTML = pokemon[0].about;
    document.getElementById("container").classList.add(pokemon[0].type[0]);
}

let table = (pokemon) => {

}