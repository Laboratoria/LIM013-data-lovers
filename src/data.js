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
    return result
  },

   //calcular por nivel (reduce)
   statsPerLevel: function (data,level,position){
    return data.reduce(
      () => {
        const name = data[position].name;
        const hp = data[position].stats.hpperlevel * level;
        return name + ' ' + hp;
      })
  } 
};
export default order;
