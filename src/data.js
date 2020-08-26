const order = {
  filterLegend: function (data, rol) {
    const result = data.filter(
      (objLegend) => {
        return objLegend.tags.includes(rol);
      }
    )
    return result
  },
  nameChampionAz: function (data) {
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

      //console.log("result", result)
      return result
    },

  //ordenar nombres de Z a A
  nameChampionZa: function (data) {
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
    //console.log("result",result)
      });
    return result
  },

  //Método reduce
  /*championForLevel: function (params) {
    const result = arr.reduce(callback(acumulador, valorActual[, indice[, array]][, valorInicial]){
      return
    }
  }*/
};
export default order;
