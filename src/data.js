// estas funciones son de ejemplo
const filters = {

    filtroPorPokemon : (data,selectType) => {
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

    filterSearch:(data,selectName) => {
      const myArray= data.filter((myObject)=>{
        
        return myObject.name.includes(selectName);
      })
      return myArray;
    },

    sortByCp: (objectCp) => {
      objectCp.sort(function (a,b){
        let x = a.max-cp;
        let y = b.max-cp;
        if (x < y) {return stats['max-cp'];}
        if (x > y) {return stats['max-cp'];}
        return 0;
      });
      return objectCp;
    },

}

export default filters; 
