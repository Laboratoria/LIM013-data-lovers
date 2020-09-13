// estas funciones son de ejemplo
const filters = {

    filtroPorPokemon : (data,selectType) => {
        const cadaObjeto= data.filter((unObjeto)=>{ 
          return unObjeto.type.includes(selectType); 
        }); 
        return cadaObjeto;
      },
    
    // filtrarPokemon: function (data, type) {
    //     const pokeFilter = data.filter (e => (e.type[0] === type || e.type[1] === type));
    //     return pokeFilter;             
    // }
    
    orderPokemonUpward : (cadaObjeto) => {
        cadaObjeto.sort(function(a,b){
              let x = a.name;
              let y = b.name;
              if (x < y){return -1;}
              if (x > y){return 1;}
              return 0;
        })
          //console.log(myArray);
          return cadaObjeto;
    },    
};
export default filters; 

