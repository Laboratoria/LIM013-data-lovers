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
  hpperLevel: function (data, level, position) {
    return data.reduce(
      () => {
        const name = data[position].name;
        const hp = data[position].stats.hp + (data[position].stats.hpperlevel * level);
        return name + ' ' + hp;
      })
  },

  mpperLevel: function (data, level, position) {
    return data.reduce(
      () => {
      
        const mp = data[position].stats.mp + (data[position].stats.mpperlevel * level);
        //console.log('mp',mp)
        return mp;
      })
  },

  attackperLevel: function (data, level, position) {
    return data.reduce(
      () => {
        const attack = data[position].stats.attackdamage + (data[position].stats.attackdamageperlevel * level);
        return attack;
      })
  }
};
export default order;
