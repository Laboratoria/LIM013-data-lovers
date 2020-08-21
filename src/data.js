// estas funciones son de ejemplo

export const filterByType = (array,type) => array.filter (x => x.type.includes(type))
;

export const sortByName = (array,condition) => {
  let newArray = array.sort((a,b) => a.name>b.name ? 1:-1);
  if ( condition === "2" ) {array.sort((a,b) => a.name<b.name ? 1:-1);}
  if ( condition === "3" ) {array.sort((a,b) => a.num-b.num);} 
  if ( condition === "4" ) {array.sort((a,b) => b.num-a.num);}
};

export const findByName = () => {
  return 'OMG';
};

