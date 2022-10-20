// estas funciones son de ejemplo
const filters = {

    filtroPorPokemon : (data, selectType) => {
        const cadaObjeto= data.filter((unObjeto)=>{ 
          return unObjeto.type.includes(selectType); 
        }); 
        return cadaObjeto;
      },

    sortByNameUpward : (Objetouno) => {
        Objetouno.sort(function(a,b){
              let x = a.name;
              let y = b.name;
              if (x < y){return -1;}
              if (x > y){return 1;}
              return 0;
        });
          return Objetouno;
    },  
  
    filterRegion: (data, selectRegion) => {
        const objetoRegion = data.filter((objetoRegion)=> {
            return objetoRegion.generation.name.includes(selectRegion);
        });
        return objetoRegion;
    },

    filterSearch:(data, selectName) => {
      const myArray= data.filter((myObject)=> {
        
        return myObject.name.includes(selectName);
      });
      return myArray;

    },

    sortByCp: (pokeCp, valueSelect) => {
      console.log(valueSelect);
      if (valueSelect === 'max') {
        pokeCp.sort(function (a,b){
          let cp1 = parseInt(a.stats["max-cp"]);
          let cp2 = parseInt(b.stats["max-cp"]);
          if(cp1 > cp2){
          return 1;
          } 
          
          if(cp1 < cp2){
          return -1;
          }
          return 0;
        }); 
        return pokeCp.reverse();         
      }
      if (valueSelect === 'min') {
        pokeCp.sort(function (a,b){
          let cp1 = parseInt(a.stats["max-cp"]);
          let cp2 = parseInt(b.stats["max-cp"]);
          
          if(cp1 < cp2){
          return -1;
          }
          if(cp1 > cp2){
            return 1; 
          }
          return 0;
         });
        return pokeCp;
      } 
    }
}

export default filters; 
