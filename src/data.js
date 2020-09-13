// estas funciones son de ejemplo
const filters = {
    filtrarPokemon: function (data, type) {
        const pokeFilter = data.filter (e => (e.type[0] === type || e.type[1] === type));
        return pokeFilter;             
    }
};
export default filters; 

