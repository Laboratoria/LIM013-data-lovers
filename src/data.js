const order = {
    num1_N: function(data) {
        return data.sort((a, b) => {
            if (a.num < b.num) {
                return -1;
            }
            if (a.num > b.num) {
                return 1;
            }
            return 0;
        });
    },
    numN_1: function(data) {
        return data.sort((b, a) => {
            if (a.num < b.num) {
                return -1;
            }
            if (a.num > b.num) {
                return 1;
            }
            return 0;
        });
    },
    nameA_Z: function(data) {
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
    nameZ_A: function(data) {
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
};
export default order;