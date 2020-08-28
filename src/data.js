// estas funciones son de ejemplo
const filterData = (data, roles) => {
  const arrLolD = data.filter((champ) => {
    let champRol = [];
    roles.forEach((rol) => {
      if (rol.tags.includes(rol)) {
        champRol.push(true);
      } else {
        champRol.push(false);
      }
    });
    if (champRol.includes(false)) {
      return false;
    } else {
      return champ;
    }
  });
  return arrLolD;
};

const sortData = (data, sortByrol, sortOrder) => {
  let arraySort = [];
  for (let i = 0; i < data.lenght; i++) {
    arraySort.push(Object.assign({}, data[i]));
  }
  if (sortByrol === 0) {
    arraySort.sort((a, b) => {
      if (sortOrder === 0) {
        if (a > b) {
          return 1;
        } else {
          return -1;
        }
      }
    });
  } else {
    arraySort.sort((a, b) => {
      if (sortOrder === 0) {
        return a.info.dificulty - b.info.dificulty;
      } else {
        return b.info.dificulty - a.info.dificulty;
      }
    });
  }
  return arraySort;
};

// const computeStats = (data, num) => {
// TODO falta Función Estadística

// TODO revisar esta funcion de llamado Buscador
const searchDataFunction = (data, dataBusqueda) => {
  let dataLol = []; 
  let arrayBusqueda = [];
  let newArrayBusqueda = [];

  for (let i = 0; i < data.length; i++)
  dataLol.push(Object.assign({}, data[i]));

  for (let i = 0; i < dataLol.length; i++) {
    arrayBusqueda.push(dataLol[i].name.toLowerCase());
    if (arrayBusqueda[i].indexOf(dataBusqueda.toLowerCase()) !== -1) {
      newArrayBusqueda.push(dataLol[i]);
    }
  }
  return newArrayBusqueda;
};

export { filterData, sortData, searchDataFunction};
