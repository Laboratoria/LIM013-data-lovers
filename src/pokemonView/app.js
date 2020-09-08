// eslint-disable-next-line no-undef
google.charts.load("current", { packages: ["table"] });
// eslint-disable-next-line no-undef
google.charts.setOnLoadCallback(drawTableFastAttacks);
// eslint-disable-next-line no-undef
google.charts.setOnLoadCallback(drawTableSpecialAttacks);
 
const namePokemon = localStorage.getItem("namePokemon");
 
let imgPokemon = document.createElement("img");
document.getElementById("img-pokemon").appendChild(imgPokemon);
 
document.getElementById("stats").style.display = "none";
document.getElementById("abilities").style.display = "none";
 
document.getElementById("button-overview").addEventListener("click", () => {
  document.getElementById("stats").style.display = "none";
  document.getElementById("abilities").style.display = "none";
  document.getElementById("overview").style.display = "block";
});
document.getElementById("buttton-stats").addEventListener("click", () => {
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
 
let pokemon = [];
fetch("../data/pokemon/pokemon.json")
  .then((data) => data.json())
  .then((data) => {
    pokemon = data.pokemon;
    pokemon = pokemon.filter((pokemon) => pokemon.name.includes(namePokemon));
    pokemon = pokemon[0];
    basicData(pokemon);
    abilities(pokemon);
    overview(pokemon);
    typeIcon(pokemon);
  });
 
let basicData = (pokemon) => {
  const num = pokemon.num;
  imgPokemon.setAttribute(
    "src",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + num + ".png"
  );
  imgPokemon.setAttribute("class", "img-pokemon-img");
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
  resistants.forEach((resistant) => {
    let span = document.createElement("span");
    span.setAttribute("class", "resistant");
    span.classList.add(resistant);
    document.getElementById("span-resistant").appendChild(span);
    span.innerHTML = resistant;
  });
  let weaknesses = pokemon.weaknesses;
  weaknesses.forEach((weaknesse) => {
    let span = document.createElement("span");
    span.setAttribute("class", "resistant");
    span.classList.add(weaknesse);
    document.getElementById("span-weaknesses").appendChild(span);
    span.innerHTML = weaknesse;
  });
};
 
let overview = (pokemon) => {
  let evolution = pokemon.evolution;
  if (evolution["next-evolution"]) {
    let evoltions = evolution["next-evolution"];
    evoltions.forEach((evolution) => {
      let num = evolution.num;
      seeEvolution(num);
      if (evolution["next-evolution"]) {
        let preNextEvolution = evolution["next-evolution"];
        preNextEvolution.forEach((evolution) => {
          let num = evolution.num;
          seeEvolution(num);
        });
      }
      if (evolution["prev-evolution"]) {
        let prePreEvolution = evolution["prev-evolution"];
        prePreEvolution.forEach((evolution) => {
          let num = evolution.num;
          seeEvolution(num);
        });
      }
    });
  }
  if (evolution["prev-evolution"]) {
    let evolutions = evolution["prev-evolution"];
    evolutions.forEach((evolution) => {
      let num = evolution.num;
      seeEvolution(num);
      if (evolution["next-evolution"]) {
        let preNextEvolution = evolution["next-evolution"];
        preNextEvolution.forEach((evolution) => {
          let num = evolution.num;
          seeEvolution(num);
        });
      }
      if (evolution["prev-evolution"]) {
        let prePreEvolution = evolution["prev-evolution"];
        prePreEvolution.forEach((evolution) => {
          let num = evolution.num;
          seeEvolution(num);
        });
      }
    });
  }
 
  document.getElementById("height").innerHTML = pokemon.size.weight;
  document.getElementById("weight").innerHTML = pokemon.size.height;
};
 
function seeEvolution(num) {
  let imgPokemonEv = document.createElement("img");
  document.getElementById("image-evolution").appendChild(imgPokemonEv);
  imgPokemonEv.setAttribute(
    "src",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + num + ".png"
  );
  imgPokemonEv.setAttribute("class", "pokemon-evolucion");
}
 
// Type-icon + img
let typeIcon = (pokemon) => {
  let type = pokemon.type;
  type.forEach((type) => {
    let poke = type;
 
    let imgType = document.createElement("img");
    document.getElementById("img-type").appendChild(imgType);
    imgType.setAttribute("src", "../type-icon/" + poke + ".png");
    imgType.setAttribute("class", "type-icon");
  });
};
 
function drawTableFastAttacks() {
  let fastAttacks = pokemon["quick-move"];
  let keysAttacks = Object.keys(fastAttacks[0]);
 
  // eslint-disable-next-line no-undef
  let data = new google.visualization.DataTable();
 
  keysAttacks.forEach((key) => {
    data.addColumn("string", key);
  });
 
  fastAttacks.forEach((attack) => {
    let values = Object.values(attack);
    data.addRows([[values[0], values[1], values[2], values[3], values[4]]]);
  });
 
  // eslint-disable-next-line no-undef
  var table = new google.visualization.Table(
    document.getElementById("table-fast-attacks")
  );
  table.draw(data, { showRowNumber: true, width: "100%", height: "100%" });
}
 
function drawTableSpecialAttacks() {
  let specialAttacks = pokemon["special-attack"];
  let keysSpecialAttacks = Object.keys(specialAttacks[0]);
  // eslint-disable-next-line no-undef
  let data = new google.visualization.DataTable();
 
  keysSpecialAttacks.forEach((key) => {
    data.addColumn("string", key);
  });
 
  specialAttacks.forEach((specialattack) => {
    let values = Object.values(specialattack);
    data.addRows([[values[0], values[1], values[2], values[3], values[4]]]);
  });
 
  // eslint-disable-next-line no-undef
  var table = new google.visualization.Table(
    document.getElementById("table-special-attacks")
  );
  table.draw(data, { showRowNumber: true, width: "100%", height: "100%" });
}
 

