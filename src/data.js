// estas funciones son de ejemplo

export const filterByType = (array,type) => {
  let newArray = array.filter((x) => x.type.includes(type));
  return newArray;
};

export const sortByName = (array,value) => {
  let newArray = array.sort((a,b) => a.name>b.name ? 1:-1);
  if ( value == "2" ) {array.sort((a,b) => b.name>a.name ? 1:-1);}
  if ( value == "3" ) {array.sort((a,b) => a.num-b.num);} 
  if ( value == "4" ) {array.sort((a,b) => b.num-a.num);}
  return newArray;
};

export const findByName = () => {
  return 'OMG';
};

