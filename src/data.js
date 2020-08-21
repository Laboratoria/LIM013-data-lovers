// estas funciones son de ejemplo

export const filteredPokemon = (data,selectType) => {
  const miArray= data.filter((myObject)=>{ 
    return myObject.type.includes(selectType); // Para ver si arreglo incluye valor seleccionado
  });
  return miArray;
};

export const anotherExample = () => {
  return 'OMG';
};
