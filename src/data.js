// estas funciones son de ejemplo

export const filteredPokemon = (data,selectType) => {
  const miArray= data.filter((myObject)=>{ 
    return myObject.type.includes(selectType); // Para ver si arreglo incluye valor seleccionado
  }); 
  return miArray;
};

export const orderPokemonUpward = (myArray) => {
  myArray.sort(function(a,b){
        let x = a.name;
        let y = b.name;
        if (x < y){return -1;}
        if (x > y){return 1;}
        return 0;
    });

    console.log(myArray);
    return myArray;
};

export const orderPokemonDownward = (myArray) => {
  myArray.sort(function(a,b){
        let x = a.name;
        let y = b.name;
        if (x < y){return 1;}
        if (x > y){return -1;}
        return 0;
    });

    console.log(myArray);
    return myArray;
};




export const anotherExample = () => {
  return 'OMG';
};
