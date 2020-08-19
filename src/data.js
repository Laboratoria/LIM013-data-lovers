export let order1_n = (data) => {
  return data.sort((a,b) => {
    if (a.num < b.num) {
      return -1;
    }
    if (a.num > b.num) {
      return 1;
    }
    return 0;
  });
}
//Fin función para ordenar descendentemente por número

//Función para ordenar ascendentemente por número
export let ordern_1 = (data) => {
  return data.sort((b,a) => {
    if (a.num < b.num) {
      return -1;
    }
    if (a.num > b.num) {
      return 1;
    }
    return 0;
  });
}
//Fin función para ordenar ascendentemente por number

//Función para ordenar ascendentemente por Name
export let orderA_Z= (data) => {
  return data.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name> b.name) {
      return 1;
    }
    return 0;
  });
}
//Fin función para ordenar ascendentemente por name

//Función para ordenar descendente por Name
export let  orderZ_A= (data) => {
  return data.sort((b, a) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name> b.name) {
      return 1;
    }
    return 0;
  });
}
//Fin función para ordenar descendente por name