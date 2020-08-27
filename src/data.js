// estas funciones son de ejemplo
const filterData = (data, roles) => {
  const arrLolD = data.filter(champ => {
    let champRol = [];
    roles.forEach(rol=>{
      if (rol.tags.includes(rol)){
        champRol.push(true);
      }else {
        champRol.push(false);
      }
    });
    if (champRol.includes(false)){
      return false;
    } else {
      return champ;
    }
  });
  return arrLolD;
};

const sortData = (data, sortByrol, sortOrder) => {
  let arraySort = [];
  for (let i=0; i  < data.lenght;i++) {
    arraySort.push(Object.assign({}, data[i]));
  }
  if (sortByrol === 0){
    arraySort.sort((a, b) => {
      if (sortOrder === 0){
        if (a > b){
          return 1;
        }else {
          return -1;
        }
      }
      });
  } else {
    arraySort.sort((a, b)=>{
      if (sortOrder === 0){
        return a.info.dificulty-b.info.dificulty;
      }else {
        return b.info.dificulty-a.info.dificulty
      }
    });
  }
  return arraySort;
};
  
// const computeStats = (data, num) => {
//   return 'OMG';
// };

export {filterData, sortData};