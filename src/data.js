

  
  
const filterChampions = function (data, rol) {
  const result = data.filter(
    (objCampeones) => {
      return objCampeones.tags.includes(rol);
    }
  )
  return result
};

const  orderAZ = function (data) {
  const result =
    data.sort((a, b) => {
      if (a.name > b.name) {
        return 1
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    return result
  };

//ordenar alfabetico
const orderZA = function (data) {
  const result =
    data.sort((b, a) => {
      if (a.name > b.name) {
        return 1
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0; 
  });
  return result
};
//ordenar por dificultad
const orderAsc = function (data) {
  const result =
    data.sort((a, b) => {
      if (a.info.difficulty > b.info.difficulty) {
        return 1
      }
      if (a.info.difficulty < b.info.difficulty) {
        return -1;
      }
      return 0;
    
});
return result
};

const orderDesc = function (data) {
  const result =
    data.sort((b, a) => {
      if (a.info.difficulty > b.info.difficulty) {
        return 1
      }
      if (a.info.difficulty < b.info.difficulty) {
        return -1;
      }
      return 0;
    
});
return result
};

export {filterChampions, orderAZ, orderZA, orderAsc, orderDesc};


