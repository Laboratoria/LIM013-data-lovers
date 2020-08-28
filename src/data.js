export const order = {
    num1_N: function(data) {
        return data.sort((a, b) => {
            if (a.num < b.num) {
                return -1;
            }
            if (a.num > b.num) {
                return 1;
            }
            return 0;
        });
    },
    numN_1: function(data) {
        return data.sort((b, a) => {
            if (a.num < b.num) {
                return -1;
            }
            if (a.num > b.num) {
                return 1;
            }
            return 0;
        });
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
};

export const filter = {
    region: function(data, value) {
        let pokemons = data;
        const pokemonRegion = pokemons.filter(function(pokemon) {
            return pokemon.generation.name === value;
        })
        return pokemonRegion;
    },
    type: function(data, value) {
        let pokemons = data;
        if (value.length == 0) {
            return pokemons;
        } else {
            const pokemonType = pokemons.filter(function(pokemon) {
                let array = pokemon.type;
                if (value.length > 1) {
                    return ((array[0] === value[0] || array[1] === value[0]) && (array[0] === value[1] || array[1] === value[1]));
                } else {
                    return array[0] === value[0] || array[1] === value[0];
                }
            })
            return pokemonType;
        }
    },
};