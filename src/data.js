const datajs = {

  filterHumans: function (data, condition) {
    let nuevadata = data.filter(data => { return data.species === condition });
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
  },
  
nameA_Z: function(data) {
        return data.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
    },
    nameZ_A: function(data) {
        return data.sort((b, a) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
    },

}

export default datajs;
