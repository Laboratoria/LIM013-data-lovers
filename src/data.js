const order = {
  filterLegend: function (data, rol) {
    const result = data.filter(
      (objLegend) => {
        return objLegend.tags.includes(rol);
      }
    )
    return result
  },

  filterRange: function (arrayLegends, attackrange) {
    if (attackrange == 'rango1') {
      return arrayLegends.filter((objLegend) => {
        return objLegend.stats.attackrange >= 125 && objLegend.stats.attackrange <= 230;
      })
    } else if (attackrange == 'rango2') {
      return arrayLegends.filter((objLegend) => {
        return objLegend.stats.attackrange >= 231 && objLegend.stats.attackrange <= 335;
      })
    } else if (attackrange == 'rango3') {
      return arrayLegends.filter((objLegend) => {
        return objLegend.stats.attackrange >= 336 && objLegend.stats.attackrange <= 440;
      })
    } else if (attackrange == 'rango4') {
      return arrayLegends.filter((objLegend) => {
        return objLegend.stats.attackrange >= 441 && objLegend.stats.attackrange <= 545;
      })
    } else if (attackrange == 'rango5') {
      return arrayLegends.filter((objLegend) => {
        return objLegend.stats.attackrange >= 546 && objLegend.stats.attackrange <= 650;
      })
    }
  },

  //ordenar de A a Z
  nameChampionAz: function (data) {
    const result =
      data.sort((a, b) => {
        a = a.name.toLowerCase();
        b = b.name.toLowerCase();
        if (a > b) {
          return 1
        }
        if (a < b) {
          return -1;
        }
        return 0;
      });
    return result
  },

  //ordenar nombres de Z a A
  nameChampionZa: function (data) {
    const result =
      data.sort((b, a) => {
        a = a.name.toLowerCase();
        b = b.name.toLowerCase();
        if (a > b) {
          return 1
        }
        if (a < b) {
          return -1;
        }
        return 0;
      });
    return result
  },
  //calcular por nivel (reduce)
  hpperLevel: function (data, level, position) {
    return data.reduce(
      () => {
        const hp = data[position].stats.hp + (data[position].stats.hpperlevel * level);
        return hp.toFixed(3);
      })
  },

  mpperLevel: function (data, level, position) {
    return data.reduce(
      () => {
        const mp = data[position].stats.mp + (data[position].stats.mpperlevel * level);
        return mp.toFixed(3);
      })
  },

  attackperLevel: function (data, level, position) {
    return data.reduce(
      () => {
        const attack = data[position].stats.attackdamage + (data[position].stats.attackdamageperlevel * level);
        return attack.toFixed(3);
      })
  }
};
export default order;
