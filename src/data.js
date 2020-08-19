// estas funciones son de ejemplo
const datajs = {

  filterHumans: function (data, condition) {
    let nuevadata = data.filter(data => { return data.species === condition });
    console.log(nuevadata)
    function obtenerHumanos(nuevadata) {
      return `<div class="person">
		<div class="imagenes">
		<img class="photo" src="${nuevadata.image}">
		</div>
		<div class="info">
		<h2 class="name">${nuevadata.name}</h2>
		<p class="Text-datos">Genero:${nuevadata.gender}</p>
		<p class="Text-datos">Origen:${nuevadata.origin.name}</p>
		<p class="Text-datos">Especie:${nuevadata.species}</p>
		<p class="Text-datos">Estado:${nuevadata.status}</p>
		</div>
		</div>`
    }
    document.getElementById("dataHuman").innerHTML = `
	<h1 class="app-title">Total de Personajes(${nuevadata.length})</h1>
  ${nuevadata.map(obtenerHumanos).join(" ")}`
  
    //let items = data.filter(data => data.species === "Human");
    //console.log(filterHumans);
    //return items;
  },


}


export default datajs;

/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};*/
