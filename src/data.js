// estas funciones son de ejemplo
const filters = {

    filtroPorPokemon : (data,selectType) => {
        const cadaObjeto= data.filter((unObjeto)=>{ 
          return unObjeto.type.includes(selectType); 
        }); 
        return cadaObjeto;
      },

      sortByNameUpward : (cadaObjeto) => {
        cadaObjeto.sort(function(a,b){
              let x = a.name;
              let y = b.name;
              if (x < y){return -1;}
              if (x > y){return 1;}
              return 0;
        });
          console.log(cadaObjeto);
          return cadaObjeto;
    },   
    
    filterGeneration : (data, selectGeneration) => {
        const cadaObjeto = data.filter((cadaObjeto)=> {
            return cadaObjeto.generation.name.includes(selectGeneration);
        });
        return cadaObjeto;
    },

};  
export default filters; 
