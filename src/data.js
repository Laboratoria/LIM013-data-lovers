// FUNCION ORDENAR DATA
export const orderData = (data, condition) => {
	let result;
	if (condition === 'a-z') {
		result = data.sort((a, b) => {
			if (a.name > b.name) {
				return 1;
			}
			return -1;
		});
	} else {
		result = data.sort((a, b) => {
			if (a.name < b.name) {
				return 1;
			}
			return -1;
		});
	}
	return result;
};
//FIN DE FUNCION ORDENAR DATA

//FUNCION FILTRAR
export const filterDataType = (arrayFilter, typePokemon) => {
  
	if (typePokemon !== '' && typePokemon !== 'all') {
		arrayFilter = arrayFilter.filter(
			(pokemon) => pokemon.type.indexOf(typePokemon) !== -1
		);
	}

	return arrayFilter;
};

//FIN DE FUNCION FILTRAR

// FUNCION CALCULAR

// FIN DE FUNCION CALCULAR
