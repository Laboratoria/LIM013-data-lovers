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
export const filterDataType = (arrayFilter, typePokemon) => {
	if (typePokemon !== '' && typePokemon !== 'all') {
		arrayFilter = arrayFilter.filter(
			(pokemon) => pokemon.type.indexOf(typePokemon) !== -1
		);
	}

	return arrayFilter;
};

export const filterDataGeneracion = (arrayFilter, genepokemon) => {
	if (genepokemon !== '' && genepokemon !== 'all') {
		arrayFilter = arrayFilter.filter(
			(pokemon) => pokemon.generation.name === genepokemon
		);
	}
	return arrayFilter;
};

export const filterDataEgg = (arrayFilter, eggpokemon) => {
	if (eggpokemon !== '' && eggpokemon !== 'all') {
		arrayFilter = arrayFilter.filter((pokemon) => pokemon.egg === eggpokemon);
	}
	return arrayFilter;
};

/// solucionando conflictos


//FIN DE FUNCION FILTRAR
