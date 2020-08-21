const datajs = {

  filterSpecies: function (data, condition) {
    for (let i = 0; i < condition.length; i++) {
      if (condition[i].checked == true) {
        const dataF = condition[i].getAttribute("value");
        if (condition[i].name == "esp") {
          return data.filter(data => { return data.species === dataF });
        } else if (condition[i].name == "orig") {
          return data.filter(data => { return data.origin.name === dataF });
        } else if (condition[i].name == "gener") {
          return data.filter(data => { return data.gender === dataF });
        } else if (condition[i].name == "estd") {
          return data.filter(data => { return data.status === dataF });
        }
      }
    }
  },

  nameA_Z: function (data) {
    return data.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
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
      return 0;
    });
  },

}

export default datajs;
