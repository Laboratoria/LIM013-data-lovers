export const order = {
    num1_N: function (data) {
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
    numN_1: function (data) {
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
    nameA_Z: function (data) {
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
    nameZ_A: function (data) {
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
    region: function (data, value) {
        let pokemons = data;
        const pokemonRegion = pokemons.filter(function (pokemon) {
            return pokemon.generation.name === value;
        })
        return pokemonRegion;
    },
    type: function (data, value) {
        let pokemons = data;
        const pokemonType = pokemons.filter(function (pokemon) {
            let typelength = pokemon.type.length;
            for (let i = 0; i < typelength; i++) {
                return pokemon.type[i] === value;
            }
        })
        return pokemonType;
    
    },
    weakness: function (data, value) {
    
        let pokemons = data;
        const pokemonWeaknesses = pokemons.filter(function (pokemon) {
            let weaknesslength = pokemon.weaknesses.length;
            for (let i = 0; i < weaknesslength; i++) {
            
                return pokemon.weaknesses[i] === value;
            }
        })
        return pokemonWeaknesses;
      
    
    },
};

