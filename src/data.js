const datajs = {

  filterSpecies: function (data, condition) {
    for (let i = 0; i < condition.length; i++) {
      if (condition[i].checked == true) {
        const dataH = condition[i].getAttribute("value");
        if (condition[i].name == "esp") {
          return data.filter(data => { return data.species === dataH });
        } else if (condition[i].name == "orig") {
          return data.filter(data => { return data.origin.name === dataH });
        } else if (condition[i].name == "gener") {
          return data.filter(data => { return data.gender === dataH });
        } else if (condition[i].name == "estd") {
          return data.filter(data => { return data.status === dataH });
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
