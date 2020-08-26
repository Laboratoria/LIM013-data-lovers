// estas funciones son de ejemplo

//filterData(data, condition)//
export const filterByType = (array,type) => { 
  let newArray = array.filter(item => item.type.includes(type));
  return newArray;
};

//sortData(data, sortBy, sortOrder)//
export const sortByName = (array,condition) => {
  let newArray = array.sort((a,b) => a.name > b.name ? 1:-1);
  if ( condition == "descendente" ) {array.sort((a,b) => b.name > a.name ? 1:-1);}
  if ( condition == "menor-mayor" ) {array.sort((a,b) => a.num - b.num);} 
  if ( condition == "mayor-menor" ) {array.sort((a,b) => b.num - a.num);}
  return newArray;
};

//filterData(data, condition)//
export const filterByName = (array,name) => {
  let newArray = array.filter(item => item.name.includes(name));
  return newArray;
};

//computeStats(data)
export const computeByStats = (array) => {
  let newItem = array.reduce((a,b) => a + b);
  return newItem;
};
 

// array.forEach((item) => {
//   array.push(item.pc)
//     candy.push(element.candy_count)
//   }
// });

// var arreglo = [4,2,5,6,77,844,432]; //Con este arreglo trabajaremos
// var sumatoria = arreglo.reduce(function(acumulador, siguienteValor){
//   return acumulador + siguienteValor;
// }, 0);

// var suma = 0;

// for(var x = 0; x < arreglo.length; x++){
//   suma += arreglo[x];
// }
// var promedio = suma / arreglo.length;


// var arreglo = [
//   {
//     nombre: "John Doe",
//     edad: 50
//   },
//   {
//     nombre: "Pedro",
//     edad: 20
//   },
//   {
//     nombre: "Juanita",
//     edad: 22
//   }
// ];

// var sumatoriaObjeto = arreglo.reduce(function(acumulador, siguienteValor){
//   return {
//     edad: acumulador.edad + siguienteValor.edad
//   };
// }, {edad: 0}); //Si no hay nada, regresamos un objeto con edad = 0. No hay necesidad de devolver e