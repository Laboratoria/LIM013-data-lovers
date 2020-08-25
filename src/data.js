
export const filterSpecies = {

    human: (allCharacters) => {
        
        return allCharacters.filter(function(filtro) {
            return filtro.species == "Human";
        });
    },

    alien: (allCharacters) => {

        return allCharacters.filter(function(filtro) {
            return filtro.species == "Alien";

        });
    },    

    humanoid: (allCharacters) => {

        return allCharacters.filter(function(filtro) {
            return filtro.species == "Humanoid";

        });
    },

    animal: (allCharacters) => {
        
        return allCharacters.filter(function(filtro) {
            return filtro.species == "Animal";
        });
    },

    mytholog: (allCharacters) => {

        return allCharacters.filter(function(filtro) {
            return filtro.species == "Mytholog";

        });
    },    

    robot: (allCharacters) => {

        return allCharacters.filter(function(filtro) {
            return filtro.species == "Robot";

        });
    },

    unknown: (allCharacters) => {
        
        return allCharacters.filter(function(filtro) {
            return filtro.species == "unknown";
        });
    },

    cronenberg: (allCharacters) => {

        return allCharacters.filter(function(filtro) {
            return filtro.species == "Cronenberg";

        });
    },    

    poopybutthole: (allCharacters) => {

        return allCharacters.filter(function(filtro) {
            return filtro.species == "Poopybutthole";

        });
    },

    disease: (allCharacters) => {

        return allCharacters.filter(function(filtro) {
            return filtro.species == "Disease";

        });
    },    
};



export const filterStatus = {

    alive: (allCharacters) => {
        
        return allCharacters.filter(function(filtro) {
            return filtro.status == "Alive";
        });
    },

    dead: (allCharacters) => {

        return allCharacters.filter(function(filtro) {
            return filtro.status == "Dead";

        });
    },    

    unknown: (allCharacters) => {

        return allCharacters.filter(function(filtro) {
            return filtro.status == "unknown";

        });
    },    
};


export const filterGender = {

    male: (allCharacters) => {
        
        return allCharacters.filter(function(filtro) {
            return filtro.gender == "Male";
        });
    },

    female: (allCharacters) => {

        return allCharacters.filter(function(filtro) {
            return filtro.gender == "Female";

        });
    },    

    genderless: (allCharacters) => {

        return allCharacters.filter(function(filtro) {
            return filtro.gender == "Genderless";

        });
    },
    
    unknown: (allCharacters) => {

        return allCharacters.filter(function(filtro) {
            return filtro.gender == "unknown";

        });
    },
};



export const order = {

    ascending: (allCharacters) => {
        
        return allCharacters.sort(function(a,b) { 
    
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
                return 0;
        });
    },

    descending: (allCharacters) => {
        
        return allCharacters.sort(function(a,b) { 
    
            if (a.name > b.name) {
                return -1;
            }
            if (a.name < b.name) {
                return 1;
            }
                return 0;
        });
    },    

};
