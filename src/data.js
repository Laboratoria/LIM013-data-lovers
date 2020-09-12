//Filtrar Data por Tipo:
export const filterData=(pokemonData,condition)=>{
  let filterType=pokemonData.filter(pokemonfilter=>{
    return pokemonfilter.type.includes(condition);
  })
return filterType;
};

//Función Buscar Data por Nombre o Número:
export const searchData=(pokemonData,condition)=>{
  let filterSearch=pokemonData.filter(pokemonfilter=>{

    if(isNaN(condition)){ //Si la condición no es un número
      if(condition==='nidoran'){
        return pokemonfilter.name.includes(condition);
        }
        else
        {
          return pokemonfilter.name===condition;
        }
    } 
    else{
      return pokemonfilter.num===condition;
    }
  })
  // console.log(filterSearch);
  return filterSearch;
};

//Función para Ordenar:
export const sortData=(pokemonData, sortBy, sortOrder)=>{
  let filterOrder;
  
  //Ordenar por Nombre:
  if(sortBy==="name"){
    if(sortOrder==="valueTwo"){//A-Z
      filterOrder=pokemonData.sort(
        function(a,b){
          if(a.name>b.name){return 1;}
          else if(a.name<b.name){return -1;}
          // return 0;
          }
      ); }
    else if(sortOrder==="valueFour"){//Z-A
      filterOrder=pokemonData.reverse(); }
  }
  //Ordenar por Número:
  else if (sortBy==="number"){
      if(sortOrder==="valueThree"){//251-1
      filterOrder=pokemonData.sort(
        function(a,b){
          return b.num-a.num;
          }
      );}
    else  if(sortOrder==="valueFive"){//1-251
      filterOrder=pokemonData.sort(
        function(a,b){
          return a.num-b.num;
          }
      );
    }

    else  if(sortOrder==="optionStrongest"){//MaxCP
      filterOrder=pokemonData.sort(
        function(a,b){
          return b.stats["max-cp"]-a.stats["max-cp"];
          }
      ); }

      else  if(sortOrder==="optionDefense"){//MaxDef
        filterOrder=pokemonData.sort(
          function(a,b){
            return b.stats["base-defense"]-a.stats["base-defense"];
            }
        ); }
  }
  return filterOrder;
  };


// Funcion para Calcular Caramelos
  export const candyCalculate=(candyPokemon, candyCost)=>{
    
      return  candyCost-candyPokemon;

  };
