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








