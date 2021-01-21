
export const filterForNumber = (dataPokemon,numPokSelect) => {
  return dataPokemon.filter((dataPokemon)=>{ 
      return dataPokemon.num===numPokSelect;
  })
}

export const extractImgPok = (dataPEv,numPok) =>{ 
  if (numPok<=dataPEv.length){
      return dataPEv.filter((dataPokemon)=>{ 
          return dataPokemon.num===numPok;
      })[0].img;
  }
  else
  return "images/available.png";
}

export const sortByAsc = (dataPok) => {
  return dataPok.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    //return 0;
})
}

export const sortByDesc = (dataPok) => {
  return dataPok.sort((a, b) => {
    if (a.name > b.name) {
        return -1;
    }
    if (a.name < b.name) {
        return 1;
    }
   // return 0;
})
}

export const sortByLessPwr = (dataPok) => {
  return dataPok.sort((a, b) => {
    return parseInt(a.stats["max-cp"])-parseInt(b.stats["max-cp"]);
})
}


export const sortByMorePwr = (dataPok) => {
  return dataPok.sort((a, b) => {
    return parseInt(b.stats["max-cp"])-parseInt(a.stats["max-cp"]);
})
}

//función que filtra por tipo de pokémon
export const filterByType = (arrayTypeSelect,dataPokemon) =>{ 
  if (arrayTypeSelect.length===1){
      return dataPokemon.filter((dataPokemon)=>{ 
          return arrayTypeSelect[0]===dataPokemon.type[0]||arrayTypeSelect[0]===dataPokemon.type[1];
      })    
  }
  else if(arrayTypeSelect.length===2){
    return dataPokemon.filter((dataPokemon)=>{ 
    const condition1=arrayTypeSelect[0]===dataPokemon.type[0]||arrayTypeSelect[0]===dataPokemon.type[1];
    const condition2=arrayTypeSelect[1]===dataPokemon.type[0]||arrayTypeSelect[1]===dataPokemon.type[1];
    
    return condition1 && condition2;
      })
      
  }
}

//indexOff para devolver array que culpla con la condición

export const searchByNameandNum = (text,dataPok) =>{
  
  let contenedor =[];
  for(let pokemon of dataPok)
  {
      let name = pokemon.name.toLowerCase();
      let num = pokemon.num.toLowerCase();
      //let num = pokemon.num.toLowerCase();
      if(name.indexOf(text) !== -1 || num.indexOf(text) !== -1){
          contenedor.push(pokemon);  
      }
  }
  return contenedor;
  }






