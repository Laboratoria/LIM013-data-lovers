// estas funciones son de ejemplo
/* 
export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
}; */

export const orderData = (data,condition) => {
  let result;
  if (condition==='a-z'){
    result=data.sort((a,b) => {
       if (a.name>b.name){
       return 1;
    }
       return -1;
    });
}
  else{
    result=data.sort((a,b) =>{
      if (a.name<b.name){
      return 1;
      }
      return -1;  
    });
  }
return result;
<<<<<<< HEAD
}

export const filterData = (data, condition) => {
  const conditionType = condition[0].value;
  const conditionEgg = condition[1].value;
  const conditionRegion = condition[2].value;
  let arrFilter = data;
  if (conditionType !== '' && conditionType !== 'all') {
    arrFilter = arrFilter.filter((infoPokemon) => infoPokemon.type.indexOf(conditionType) !== -1);
  }
  if (conditionEgg !== '' && conditionEgg !== 'all') {
    arrFilter = arrFilter.filter((infoPokemon) => infoPokemon.egg === conditionEgg);
  }
  if (conditionRegion !== '' && conditionRegion !== 'all') {
    arrFilter = arrFilter.filter((infoPokemon) => infoPokemon.generation.name === conditionRegion);
  }
  return arrFilter;
}; 
=======
};
>>>>>>> bdf7d546f6d9ef86f5131b9fe548e3e72a17fed2
