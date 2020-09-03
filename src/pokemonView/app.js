document.getElementById('name').innerHTML = localStorage.getItem('namePokemon');
// VISUALIZAR CON ARCHIVO .JSON

let pokemones=[];
    fetch("../data/pokemon/pokemon.json")
     .then(data => data.json())
     .then(data => {
       pokemones = data;
       console.log(pokemones);
     });