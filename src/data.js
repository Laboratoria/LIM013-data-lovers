// estas funciones son de ejemplo
export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

export const filterForName = (dataPokemon,namePokSelect) => {
  return dataPokemon.filter((dataPokemon)=>{ 
      return dataPokemon.name==namePokSelect;
  })
}








