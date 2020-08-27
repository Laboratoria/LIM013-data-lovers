// estas funciones son de ejemplo
import lol from './data/lol/lol.js'
console.log(lol);
const objectLol=lol.data;
console.log(Object.values(objectLol));


export const example = () => {
  return 'example';
};


export const anotherExample = () => {
  return 'OMG';
};

export const filteredbyClass= (obj,term)=> {
  const filteredbyClass=obj.filter(campeon=>(campeon.tags.indexOF(term) !==-1 ? campeon :false));
  console.log(filterbyClass);
  return filteredbyClass;
};
  //let champiosArray=obj.filter(product => {
  //console.log(champiosArray);
  //let bol=product.tags.indexOf(0) === 'Fighter';
  //console.log(bol);
  //return bol;
  //});
  //});