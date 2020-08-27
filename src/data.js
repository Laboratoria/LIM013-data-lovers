const datajs = {

  filterSpecies: function (data, condition, dataF) {
    if (condition === "esp") {
      if (dataF === "otros") {
        return data.filter(data => { return data.species === "Vampire" || data.species === "unknown" })
      } else
        return data.filter(data => { return data.species === dataF });
    } else if (condition === "orig") {
      if (dataF === "Earth") {
        return data.filter(data => { return data.origin.name.includes("Earth") })
      } else
        return data.filter(data => { return data.origin.name === dataF });
    } else if (condition === "gener") {
      return data.filter(data => { return data.gender === dataF });
    } else if (condition === "estd") {
      return data.filter(data => { return data.status === dataF });
    }
  },

  filterName: function (data, texto) {

    return data.filter(data => { return data.name.toLowerCase().indexOf(texto) >= 0 });
  },

  nameA_Z: function (data) {
    return data.sort((a, b) => {
      if (a.name < b.name) {
        console.log('-1');
        return -1;

      }
      if (a.name > b.name) {
        console.log('1');
        return 1;
      }

    });
  },

  nameZ_A: function (data) {
    return data.sort((b, a) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      
    });
  },

}

export default datajs;
