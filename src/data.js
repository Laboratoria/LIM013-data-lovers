// estas funciones son de ejemplo
export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

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
    return 0;
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
    return 0;
})
}

export const sortByLessPwr = (dataPok) => {
  return dataPok.sort((a, b) => {
    if (parseInt(a.stats["max-cp"]) > parseInt(b.stats["max-cp"])) {
        return 1;
    }
    if (parseInt(a.stats["max-cp"]) < parseInt(b.stats["max-cp"])) {
        return -1;
    }
    return 0;
})
}


export const sortByMorePwr = (dataPok) => {
  return dataPok.sort((a, b) => {
    if (parseInt(a.stats["max-cp"]) > parseInt(b.stats["max-cp"])) {
        return -1;
    }
    if (parseInt(a.stats["max-cp"]) < parseInt(b.stats["max-cp"])) {
        return 1;
    }
    return 0;
})

//función que filtra por tipo de pokémon
export const filterByType = (arrayTypeSelect,dataPokemon) =>{ 
  if (arrayTypeSelect.length===1){
      return dataPokemon.filter((dataPokemon)=>{ 
          return arrayTypeSelect[0]===dataPokemon.type[0]||arrayTypeSelect[0]===dataPokemon.type[1];
      })    
  }
  else if(arrayTypeSelect.length===2){
    const newArray = dataPokemon.filter((dataPokemon)=>{ 
    const condition1=arrayTypeSelect[0]===dataPokemon.type[0]||arrayTypeSelect[0]===dataPokemon.type[1];
    const condition2=arrayTypeSelect[1]===dataPokemon.type[0]||arrayTypeSelect[1]===dataPokemon.type[1];
    
    return condition1 && condition2;
      })
      if(newArray.length!==0){
          return newArray;
      } else {
          alert("¡There is no pokemon with that type combination, please choose a new combination!");
      }
  }
}









