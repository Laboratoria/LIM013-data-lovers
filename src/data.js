// estas funciones son de ejemplo

//filterData(data, condition)//
export const filterByType = (array,type) => { 
  let newArray = array.filter(item => item.type.includes(type));
  return newArray;
};

//sortData(data, sortBy, sortOrder)//
export const sortByName = (array,condition) => {
  let newArray = array.sort((a,b) => a.name>b.name ? 1:-1);
  if ( condition == "descendente" ) {array.sort((a,b) => b.name>a.name ? 1:-1);}
  if ( condition == "menor-mayor" ) {array.sort((a,b) => a.num-b.num);} 
  if ( condition == "mayor-menor" ) {array.sort((a,b) => b.num-a.num);}
  return newArray;
};

//filterData(data, condition)//
export const filterByName = (array,name) => {
  let newArray = array.filter(item => item.name.includes(name));
  return newArray;
};


//computeData()//
// export const computeByItem = (array,stats) => {
//   let newItem = item => item.stats.base-attack + item.stats.base-defense + item.stats.base-stamina;
//   return newItem; 
// };
