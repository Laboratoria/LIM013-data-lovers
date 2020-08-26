 
import {filterStatus, filterSpecies, filterGender, order } from './data.js'

import data from './data/rickandmorty/rickandmorty.js';

const allCharacters = data.results;

console.log(data);

const getListAllCharacters = () => {

    const buttonsContainer = document.getElementById("buttonsContainer");
    buttonsContainer.innerHTML = "";

    const titleContainer = document.getElementById("titleContainer");
    titleContainer.innerText = "";

    const title = document.createElement("h2");
    const titleText = document.createTextNode("List of All Characters");
    title.appendChild(titleText);
    titleContainer.appendChild(title);
    
    let page = [];
    page = allCharacters.slice(0, 20);

    const elementOrderedList = document.getElementById('listCharacters');
    elementOrderedList.innerHTML = "";

    for (let i=0; i < page.length; i++) {

        const result = page[i];
        const elementLi = document.createElement("li");
        const elementText = document.createTextNode(result.name + ", Specie: " + result.species + ", Status: " + result.status + ", Gender: " + result.gender);         // Create a text node
        
        const image = result.image;
        const elementImage = document.createElement("img");
        elementImage.src = image;
        elementImage.alt = name;
        elementLi.appendChild(elementImage); 
        elementOrderedList.appendChild(elementLi);
        elementLi.appendChild(elementText); 
    }

    for (let i=0; i < allCharacters.length; i=i+20 ){

        const button = document.createElement("button");
        const buttonText = document.createTextNode(parseInt(i / 20) + 1);
        button.appendChild(buttonText);
        buttonsContainer.appendChild(button);
                            
        function getPageAllCharacters(){
            
            button.addEventListener("click", function() {

            let page = [];
            page = allCharacters.slice(i, i+20);

            const elementOrderedList = document.getElementById('listCharacters');
            elementOrderedList.innerHTML = "";

            for (let i=0; i < page.length; i++) {

                const result = page[i];
                const elementLi = document.createElement("li"); 
                const elementText = document.createTextNode(result.name + ", Specie: " + result.species + ", Status: " + result.status + ", Gender: " + result.gender);         // Create a text node
                
                const image = result.image; 
                const elementImage = document.createElement("img");
                elementImage.src = image;
                elementImage.alt = name;
                elementLi.appendChild(elementImage); 
                elementOrderedList.appendChild(elementLi);
                elementLi.appendChild(elementText);
            }
                console.log(i);
            })
        }
        getPageAllCharacters();
    }
}
document.querySelector('#all').addEventListener('click', getListAllCharacters);



const getListSpeciesHuman = () => {
    
    let speciesHuman = [];
    speciesHuman = filterSpecies.human(allCharacters);

    const buttonsContainer = document.getElementById("buttonsContainer");
    buttonsContainer.innerHTML = "";

    const titleContainer = document.getElementById("titleContainer");
    titleContainer.innerText = "";

    const title = document.createElement("h2");
    const titleText = document.createTextNode("List of Characters Species: Human");
    title.appendChild(titleText);
    titleContainer.appendChild(title);

    let page = [];
    page = speciesHuman.slice(0, 20);

    const elementOrderedList = document.getElementById('listCharacters');
    elementOrderedList.innerHTML = "";

    for (let i=0; i < page.length; i++) {

        const result = page[i];
        const elementLi = document.createElement("li");
        const elementText = document.createTextNode(result.name + ", Specie: " + result.species + ", Status: " + result.status + ", Gender: " + result.gender);         // Create a text node
        
        const image = result.image;
        const elementImage = document.createElement("img");
        elementImage.src = image;
        elementImage.alt = name;
        elementLi.appendChild(elementImage); 
        elementOrderedList.appendChild(elementLi);
        elementLi.appendChild(elementText); 
    }

    for (let i=0; i < speciesHuman.length; i=i+20 ){

        const button = document.createElement("button");
        const buttonText = document.createTextNode(parseInt(i / 20) + 1);
        button.appendChild(buttonText);
        buttonsContainer.appendChild(button);

        function getPageSpeciesHuman(){
            
            button.addEventListener('click', function() {

            let speciesHuman = [];
            speciesHuman = filterSpecies.human(allCharacters);
            let page = [];
            page = speciesHuman.slice(i, i+20);

            const elementOrderedList = document.getElementById('listCharacters');
            elementOrderedList.innerHTML = "";

            for (let i=0; i < page.length; i++) {

                const result = page[i]; 
                const elementLi = document.createElement("li"); 
                const elementText = document.createTextNode(result.name + ", Specie: " + result.species + ", Status: " + result.status + ", Gender: " + result.gender);         // Create a text node
                
                const image = result.image; 
                const elementImage = document.createElement("img");
                elementImage.src = image;
                elementImage.alt = name;
                elementLi.appendChild(elementImage); 
                elementOrderedList.appendChild(elementLi);
                elementLi.appendChild(elementText); 
            }
                console.log(i);
            })
        }
        getPageSpeciesHuman();
    }
}
document.querySelector('#human').addEventListener('click', getListSpeciesHuman);



const getListSpeciesAlien = () => {

    let speciesAlien = [];
    speciesAlien = filterSpecies.alien(allCharacters);

    const buttonsContainer = document.getElementById("buttonsContainer");
    buttonsContainer.innerHTML = "";

    const titleContainer = document.getElementById("titleContainer");
    titleContainer.innerText = "";

    const title = document.createElement("h2");
    const titleText = document.createTextNode("List of Characters Species: Alien");
    title.appendChild(titleText);
    titleContainer.appendChild(title);

    let page = [];
    page = speciesAlien.slice(0, 20);

    const elementOrderedList = document.getElementById('listCharacters');
    elementOrderedList.innerHTML = "";

    for (let i=0; i < page.length; i++) {

        const result = page[i];
        const elementLi = document.createElement("li");
        const elementText = document.createTextNode(result.name + ", Specie: " + result.species + ", Status: " + result.status + ", Gender: " + result.gender);         // Create a text node
        
        const image = result.image;
        const elementImage = document.createElement("img");
        elementImage.src = image;
        elementImage.alt = name;
        elementLi.appendChild(elementImage); 
        elementOrderedList.appendChild(elementLi);
        elementLi.appendChild(elementText); 
    }

    for (let i=0; i < speciesAlien.length; i=i+20 ){

        const button = document.createElement("button");
        const buttonText = document.createTextNode(parseInt(i / 20) + 1);
        button.appendChild(buttonText);
        buttonsContainer.appendChild(button);
                            
        function getPageSpeciesAlien(){
            
            button.addEventListener('click', function() {

            let speciesAlien = [];
            speciesAlien = filterSpecies.alien(allCharacters);
            let page = [];
            page = speciesAlien.slice(i, i+20);

            const elementOrderedList = document.getElementById('listCharacters');
            elementOrderedList.innerHTML = "";

            for (let i=0; i < page.length; i++) {

                const result = page[i];                 
                const elementLi = document.createElement("li"); 
                const elementText = document.createTextNode(result.name + ", Specie: " + result.species + ", Status: " + result.status + ", Gender: " + result.gender);         // Create a text node
                
                const image = result.image; 
                const elementImage = document.createElement("img"); 
                elementImage.src = image;
                elementImage.alt = name;
                elementLi.appendChild(elementImage); 
                elementOrderedList.appendChild(elementLi);
                elementLi.appendChild(elementText); 
            }
                console.log(i);
            })
        }
        getPageSpeciesAlien();
    }
}
document.querySelector('#alien').addEventListener('click', getListSpeciesAlien);



const getListSpeciesHumanoid = () => {

    let speciesHumanoid = [];
    speciesHumanoid = filterSpecies.humanoid(allCharacters);

    const buttonsContainer = document.getElementById("buttonsContainer");
    buttonsContainer.innerHTML = "";

    const titleContainer = document.getElementById("titleContainer");
    titleContainer.innerText = "";

    const title = document.createElement("h2");
    const titleText = document.createTextNode("List of Characters Species: Humanoid");
    title.appendChild(titleText);
    titleContainer.appendChild(title);

    let page = [];
    page = speciesHumanoid.slice(0, 20);

    const elementOrderedList = document.getElementById('listCharacters');
    elementOrderedList.innerHTML = "";

    for (let i=0; i < page.length; i++) {

        const result = page[i];
        const elementLi = document.createElement("li");
        const elementText = document.createTextNode(result.name + ", Specie: " + result.species + ", Status: " + result.status + ", Gender: " + result.gender);         // Create a text node
       
        const image = result.image;
        const elementImage = document.createElement("img");
        elementImage.src = image;
        elementImage.alt = name;
        elementLi.appendChild(elementImage); 
        elementOrderedList.appendChild(elementLi);
        elementLi.appendChild(elementText); 
    }

    for (let i=0; i < speciesHumanoid.length; i=i+20 ){

        const button = document.createElement("button");
        const buttonText = document.createTextNode(parseInt(i / 20) + 1);
        button.appendChild(buttonText);
        buttonsContainer.appendChild(button);
                            
        function getPageSpeciesHumanoid(){
            
            button.addEventListener('click', function() {

            let speciesHumanoid = [];
            speciesHumanoid = filterSpecies.humanoid(allCharacters);
            let page = [];
            page = speciesHumanoid.slice(i, i+20);

            const elementOrderedList = document.getElementById('listCharacters');
            elementOrderedList.innerHTML = "";

            for (let i=0; i < page.length; i++) {

                const result = page[i];                 
                const elementLi = document.createElement("li"); 
                const elementText = document.createTextNode(result.name + ", Specie: " + result.species + ", Status: " + result.status + ", Gender: " + result.gender);         // Create a text node
                
                const image = result.image; 
                const elementImage = document.createElement("img"); 
                elementImage.src = image;
                elementImage.alt = name;
                elementLi.appendChild(elementImage); 
                elementOrderedList.appendChild(elementLi);
                elementLi.appendChild(elementText); 
            }
                console.log(i);
            })
        }
        getPageSpeciesHumanoid();
    }
}
document.querySelector('#humanoid').addEventListener('click', getListSpeciesHumanoid);


const getListSpeciesAnimal = () => {

    let specieAnimal = [];
    specieAnimal = filterSpecies.animal(allCharacters);

    const buttonsContainer = document.getElementById("buttonsContainer");
    buttonsContainer.innerHTML = "";

    const titleContainer = document.getElementById("titleContainer");
    titleContainer.innerText = "";

    const title = document.createElement("h2");
    const titleText = document.createTextNode("List of Characters Species: Animal");
    title.appendChild(titleText);
    titleContainer.appendChild(title);

    let page = [];
    page = specieAnimal.slice(0, 20);

    const elementOrderedList = document.getElementById('listCharacters');
    elementOrderedList.innerHTML = "";

    for (let i=0; i < page.length; i++) {

        const result = page[i];
        const elementLi = document.createElement("li");
        const elementText = document.createTextNode(result.name + ", Specie: " + result.species + ", Status: " + result.status + ", Gender: " + result.gender);         // Create a text node
        
        const image = result.image;
        const elementImage = document.createElement("img");
        elementImage.src = image;
        elementImage.alt = name;
        elementLi.appendChild(elementImage); 
        elementOrderedList.appendChild(elementLi);
        elementLi.appendChild(elementText);
    }

    for (let i=0; i < specieAnimal.length; i=i+20 ){

        const button = document.createElement("button");
        const buttonText = document.createTextNode(parseInt(i / 20) + 1);
        button.appendChild(buttonText);
        buttonsContainer.appendChild(button);
                            
        function getPageSpeciesAnimal(){
            
            button.addEventListener('click', function() {

            let specieAnimal = [];
            specieAnimal = filterSpecies.animal(allCharacters);
            let page = [];
            page = specieAnimal.slice(i, i+20);

            const elementOrderedList = document.getElementById('listCharacters');
            elementOrderedList.innerHTML = "";

            for (let i=0; i < page.length; i++) {

                const result = page[i];                 
                const elementLi = document.createElement("li"); 
                const elementText = document.createTextNode(result.name + ", Specie: " + result.species + ", Status: " + result.status + ", Gender: " + result.gender);         // Create a text node
                
                const image = result.image; 
                const elementImage = document.createElement("img"); 
                elementImage.src = image;
                elementImage.alt = name;
                elementLi.appendChild(elementImage); 
                elementOrderedList.appendChild(elementLi);
                elementLi.appendChild(elementText); 
            }
                console.log(i);
            })
        }
        getPageSpeciesAnimal();
    }
}
document.querySelector('#animal').addEventListener('click', getListSpeciesAnimal);



const getListSpeciesMytholog = () => {

    let specieMytholog = [];
    specieMytholog = filterSpecies.mytholog(allCharacters);

    const buttonsContainer = document.getElementById("buttonsContainer");
    buttonsContainer.innerHTML = "";

    const titleContainer = document.getElementById("titleContainer");
    titleContainer.innerText = "";

    const title = document.createElement("h2");
    const titleText = document.createTextNode("List of Characters Species: Mythological Creature");
    title.appendChild(titleText);
    titleContainer.appendChild(title);

    let page = [];
    page = specieMytholog.slice(0, 20);

    const elementOrderedList = document.getElementById('listCharacters');
    elementOrderedList.innerHTML = "";

    for (let i=0; i < page.length; i++) {

        const result = page[i];
        const elementLi = document.createElement("li");
        const elementText = document.createTextNode(result.name + ", Specie: " + result.species + ", Status: " + result.status + ", Gender: " + result.gender);         // Create a text node
        
        const image = result.image;
        const elementImage = document.createElement("img");
        elementImage.src = image;
        elementImage.alt = name;
        elementLi.appendChild(elementImage); 
        elementOrderedList.appendChild(elementLi);
        elementLi.appendChild(elementText); 
    }

    for (let i=0; i < specieMytholog.length; i=i+20 ){

        const button = document.createElement("button");
        const buttonText = document.createTextNode(parseInt(i / 20) + 1);
        button.appendChild(buttonText);
        buttonsContainer.appendChild(button);
                            
        function getPageSpeciesMytholog(){
            
            button.addEventListener('click', function() {

            let specieMytholog = [];
            specieMytholog = filterSpecies.mytholog(allCharacters);
            let page = [];
            page = specieMytholog.slice(i, i+20);

            const elementOrderedList = document.getElementById('listCharacters');
            elementOrderedList.innerHTML = "";

            for (let i=0; i < page.length; i++) {

                const result = page[i];                 
                const elementLi = document.createElement("li"); 
                const elementText = document.createTextNode(result.name + ", Specie: " + result.species + ", Status: " + result.status + ", Gender: " + result.gender);         // Create a text node
                
                const image = result.image; 
                const elementImage = document.createElement("img"); 
                elementImage.src = image;
                elementImage.alt = name;
                elementLi.appendChild(elementImage); 
                elementOrderedList.appendChild(elementLi);
                elementLi.appendChild(elementText);
            }
                console.log(i);
            })
        }
        getPageSpeciesMytholog();
    }
}
document.querySelector('#mytholog').addEventListener('click', getListSpeciesMytholog);



const getListSpeciesRobot = () => {

    let specieRobot = [];
    specieRobot = filterSpecies.robot(allCharacters);

    const buttonsContainer = document.getElementById("buttonsContainer");
    buttonsContainer.innerHTML = "";

    const titleContainer = document.getElementById("titleContainer");
    titleContainer.innerText = "";

    const title = document.createElement("h2");
    const titleText = document.createTextNode("List of Characters Species: Robot");
    title.appendChild(titleText);
    titleContainer.appendChild(title);

    let page = [];
    page = specieRobot.slice(0, 20);

    const elementOrderedList = document.getElementById('listCharacters');
    elementOrderedList.innerHTML = "";

    for (let i=0; i < page.length; i++) {

        const result = page[i];
        const elementLi = document.createElement("li");
        const elementText = document.createTextNode(result.name + ", Specie: " + result.species + ", Status: " + result.status + ", Gender: " + result.gender);         // Create a text node
        
        const image = result.image;
        const elementImage = document.createElement("img");
        elementImage.src = image;
        elementImage.alt = name;
        elementLi.appendChild(elementImage); 
        elementOrderedList.appendChild(elementLi);
        elementLi.appendChild(elementText); 
    }

    for (let i=0; i < specieRobot.length; i=i+20 ){

        const button = document.createElement("button");
        const buttonText = document.createTextNode(parseInt(i / 20) + 1);
        button.appendChild(buttonText);
        buttonsContainer.appendChild(button);
                            
        function getPageSpeciesRobot(){
            
            button.addEventListener('click', function() {

            let specieRobot = [];
            specieRobot = filterSpecies.robot(allCharacters);
            let page = [];
            page = specieRobot.slice(i, i+20);

            const elementOrderedList = document.getElementById('listCharacters');
            elementOrderedList.innerHTML = "";

            for (let i=0; i < page.length; i++) {

                const result = page[i];                 
                const elementLi = document.createElement("li"); 
                const elementText = document.createTextNode(result.name + ", Specie: " + result.species + ", Status: " + result.status + ", Gender: " + result.gender);         // Create a text node
                
                const image = result.image; 
                const elementImage = document.createElement("img"); 
                elementImage.src = image;
                elementImage.alt = name;
                elementLi.appendChild(elementImage); 
                elementOrderedList.appendChild(elementLi);
                elementLi.appendChild(elementText); 
            }
                console.log(i);
            })
        }
        getPageSpeciesRobot();
    }
}
document.querySelector('#robot').addEventListener('click', getListSpeciesRobot);



const getListSpeciesUnknown = () => {

    let specieUnknown = [];
    specieUnknown = filterSpecies.unknown(allCharacters);

    const buttonsContainer = document.getElementById("buttonsContainer");
    buttonsContainer.innerHTML = "";

    const titleContainer = document.getElementById("titleContainer");
    titleContainer.innerText = "";

    const title = document.createElement("h2");
    const titleText = document.createTextNode("List of Characters Species: Unknown");
    title.appendChild(titleText);
    titleContainer.appendChild(title);

    let page = [];
    page = specieUnknown.slice(0, 20);

    const elementOrderedList = document.getElementById('listCharacters');
    elementOrderedList.innerHTML = "";

    for (let i=0; i < page.length; i++) {

        const result = page[i];
        const elementLi = document.createElement("li");
        const elementText = document.createTextNode(result.name + ", Specie: " + result.species + ", Status: " + result.status + ", Gender: " + result.gender);         // Create a text node
        
        const image = result.image;
        const elementImage = document.createElement("img");
        elementImage.src = image;
        elementImage.alt = name;
        elementLi.appendChild(elementImage); 
        elementOrderedList.appendChild(elementLi);
        elementLi.appendChild(elementText); 
    }

    for (let i=0; i < specieUnknown.length; i=i+20 ){

        const button = document.createElement("button");
        const buttonText = document.createTextNode(parseInt(i / 20) + 1);
        button.appendChild(buttonText);
        buttonsContainer.appendChild(button);
                            
        function getPageSpeciesUnknown(){
            
            button.addEventListener('click', function() {

            let specieUnknown = [];
            specieUnknown = filterSpecies.unknown(allCharacters);
            let page = [];
            page = specieUnknown.slice(i, i+20);

            const elementOrderedList = document.getElementById('listCharacters');
            elementOrderedList.innerHTML = "";

            for (let i=0; i < page.length; i++) {

                const result = page[i];                 
                const elementLi = document.createElement("li"); 
                const elementText = document.createTextNode(result.name + ", Specie: " + result.species + ", Status: " + result.status + ", Gender: " + result.gender);         // Create a text node
                
                const image = result.image; 
                const elementImage = document.createElement("img"); 
                elementImage.src = image;
                elementImage.alt = name;
                elementLi.appendChild(elementImage); 
                elementOrderedList.appendChild(elementLi);
                elementLi.appendChild(elementText);
            }
                console.log(i);
            })
        }
        getPageSpeciesUnknown();
    }
}
document.querySelector('#unknownSpecie').addEventListener('click', getListSpeciesUnknown);


const getListSpeciesCronenberg = () => {

    let specieCronenberg = [];
    specieCronenberg = filterSpecies.cronenberg(allCharacters);

    const buttonsContainer = document.getElementById("buttonsContainer");
    buttonsContainer.innerHTML = "";

    const titleContainer = document.getElementById("titleContainer");
    titleContainer.innerText = "";

    const title = document.createElement("h2");
    const titleText = document.createTextNode("List of Characters Species: Cronenberg");
    title.appendChild(titleText);
    titleContainer.appendChild(title);

    let page = [];
    page = specieCronenberg.slice(0, 20);

    const elementOrderedList = document.getElementById('listCharacters');
    elementOrderedList.innerHTML = "";

    for (let i=0; i < page.length; i++) {

        const result = page[i];
        const elementLi = document.createElement("li");
        const elementText = document.createTextNode(result.name + ", Specie: " + result.species + ", Status: " + result.status + ", Gender: " + result.gender);         // Create a text node
        
        const image = result.image;
        const elementImage = document.createElement("img");
        elementImage.src = image;
        elementImage.alt = name;
        elementLi.appendChild(elementImage); 
        elementOrderedList.appendChild(elementLi);
        elementLi.appendChild(elementText);
    }

    for (let i=0; i < specieCronenberg.length; i=i+20 ){

        const button = document.createElement("button");
        const buttonText = document.createTextNode(parseInt(i / 20) + 1);
        button.appendChild(buttonText);
        buttonsContainer.appendChild(button);
                            
        function getPageSpeciesCronenberg(){
            
            button.addEventListener('click', function() {

            let specieCronenberg = [];
            specieCronenberg = filterSpecies.cronenberg(allCharacters);
            let page = [];
            page = specieCronenberg.slice(i, i+20);

            const elementOrderedList = document.getElementById('listCharacters');
            elementOrderedList.innerHTML = "";

            for (let i=0; i < page.length; i++) {

                const result = page[i];                 
                const elementLi = document.createElement("li"); 
                const elementText = document.createTextNode(result.name + ", Specie: " + result.species + ", Status: " + result.status + ", Gender: " + result.gender);         // Create a text node
                
                const image = result.image; 
                const elementImage = document.createElement("img");
                elementImage.src = image;
                elementImage.alt = name;
                elementLi.appendChild(elementImage); 
                elementOrderedList.appendChild(elementLi);
                elementLi.appendChild(elementText);
            }
                console.log(i);
            })
        }
        getPageSpeciesCronenberg();
    }
}
document.querySelector('#cronenberg').addEventListener('click', getListSpeciesCronenberg);


const getListSpeciesPoopybutthole = () => {

    let speciePoopybutthole = [];
    speciePoopybutthole = filterSpecies.poopybutthole(allCharacters);

    const buttonsContainer = document.getElementById("buttonsContainer");
    buttonsContainer.innerHTML = "";

    const titleContainer = document.getElementById("titleContainer");
    titleContainer.innerText = "";

    const title = document.createElement("h2");
    const titleText = document.createTextNode("List of Characters Species: Poopybutthole");
    title.appendChild(titleText);
    titleContainer.appendChild(title);

    let page = [];
    page = speciePoopybutthole.slice(0, 20);

    const elementOrderedList = document.getElementById('listCharacters');
    elementOrderedList.innerHTML = "";

    for (let i=0; i < page.length; i++) {

        const result = page[i];
        const elementLi = document.createElement("li");
        const elementText = document.createTextNode(result.name + ", Specie: " + result.species + ", Status: " + result.status + ", Gender: " + result.gender);         // Create a text node
        
        const image = result.image;
        const elementImage = document.createElement("img");
        elementImage.src = image;
        elementImage.alt = name;
        elementLi.appendChild(elementImage); 
        elementOrderedList.appendChild(elementLi);
        elementLi.appendChild(elementText); 
    }

    for (let i=0; i < speciePoopybutthole.length; i=i+20 ){

        const button = document.createElement("button");
        const buttonText = document.createTextNode(parseInt(i / 20) + 1);
        button.appendChild(buttonText);
        buttonsContainer.appendChild(button);
                            
        function getPageSpeciesPoopybutthole(){
            
            button.addEventListener('click', function() {

            let speciePoopybutthole = [];
            speciePoopybutthole = filterSpecies.poopybutthole(allCharacters);
            let page = [];
            page = speciePoopybutthole.slice(i, i+20);

            const elementOrderedList = document.getElementById('listCharacters');
            elementOrderedList.innerHTML = "";

            for (let i=0; i < page.length; i++) {

                const result = page[i];                 
                const elementLi = document.createElement("li"); 
                const elementText = document.createTextNode(result.name + ", Specie: " + result.species + ", Status: " + result.status + ", Gender: " + result.gender);         // Create a text node
                
                const image = result.image; 
                const elementImage = document.createElement("img"); 
                elementImage.src = image;
                elementImage.alt = name;
                elementLi.appendChild(elementImage); 
                elementOrderedList.appendChild(elementLi);
                elementLi.appendChild(elementText);
            }
                console.log(i);
            })
        }
        getPageSpeciesPoopybutthole();
    }
}
document.querySelector('#poopybutthole').addEventListener('click', getListSpeciesPoopybutthole);


const getListSpeciesDisease = () => {

    let specieDisease = [];
    specieDisease = filterSpecies.disease(allCharacters);

    const buttonsContainer = document.getElementById("buttonsContainer");
    buttonsContainer.innerHTML = "";

    const titleContainer = document.getElementById("titleContainer");
    titleContainer.innerText = "";

    const title = document.createElement("h2");
    const titleText = document.createTextNode("List of Characters Species: Disease");
    title.appendChild(titleText);
    titleContainer.appendChild(title);

    let page = [];
    page = specieDisease.slice(0, 20);

    const elementOrderedList = document.getElementById('listCharacters');
    elementOrderedList.innerHTML = "";

    for (let i=0; i < page.length; i++) {

        const result = page[i];
        const elementLi = document.createElement("li");
        const elementText = document.createTextNode(result.name + ", Specie: " + result.species + ", Status: " + result.status + ", Gender: " + result.gender);         // Create a text node
        
        const image = result.image;
        const elementImage = document.createElement("img");
        elementImage.src = image;
        elementImage.alt = name;
        elementLi.appendChild(elementImage); 
        elementOrderedList.appendChild(elementLi);
        elementLi.appendChild(elementText);
    }

    for (let i=0; i < specieDisease.length; i=i+20 ){

        const button = document.createElement("button");
        const buttonText = document.createTextNode(parseInt(i / 20) + 1);
        button.appendChild(buttonText);
        buttonsContainer.appendChild(button);
                            
        function getPageSpeciesDisease(){
            
            button.addEventListener('click', function() {

            let specieDisease = [];
            specieDisease = filterSpecies.disease(allCharacters);
            let page = [];
            page = specieDisease.slice(i, i+20);

            const elementOrderedList = document.getElementById('listCharacters');
            elementOrderedList.innerHTML = "";

            for (let i=0; i < page.length; i++) {

                const result = page[i];                 
                const elementLi = document.createElement("li"); 
                const elementText = document.createTextNode(result.name + ", Specie: " + result.species + ", Status: " + result.status + ", Gender: " + result.gender);         // Create a text node
                
                const image = result.image; 
                const elementImage = document.createElement("img"); 
                elementImage.src = image;
                elementImage.alt = name;
                elementLi.appendChild(elementImage); 
                elementOrderedList.appendChild(elementLi);
                elementLi.appendChild(elementText);
            }
                console.log(i);
            })
        }
        getPageSpeciesDisease();
    }
}
document.querySelector('#disease').addEventListener('click', getListSpeciesDisease);



const getListStatusAlive = () => {

    let statusAlive = [];
    statusAlive = filterStatus.alive(allCharacters);

    const buttonsContainer = document.getElementById("buttonsContainer");
    buttonsContainer.innerHTML = "";

    const titleContainer = document.getElementById("titleContainer");
    titleContainer.innerText = "";

    const title = document.createElement("h2");
    const titleText = document.createTextNode("List of Characters Status: Alive");
    title.appendChild(titleText);
    titleContainer.appendChild(title);

    let page = [];
    page = statusAlive.slice(0, 20);

    const elementOrderedList = document.getElementById('listCharacters');
    elementOrderedList.innerHTML = "";

    for (let i=0; i < page.length; i++) {

        const result = page[i];
        const elementLi = document.createElement("li");
        const elementText = document.createTextNode(result.name + ", Specie: " + result.species + ", Status: " + result.status + ", Gender: " + result.gender);         // Create a text node
        
        const image = result.image;
        const elementImage = document.createElement("img");
        elementImage.src = image;
        elementImage.alt = name;
        elementLi.appendChild(elementImage); 
        elementOrderedList.appendChild(elementLi);
        elementLi.appendChild(elementText);
    }

    for (let i=0; i < statusAlive.length; i=i+20 ){

        const button = document.createElement("button");
        const buttonText = document.createTextNode(parseInt(i / 20) + 1);
        button.appendChild(buttonText);
        buttonsContainer.appendChild(button);
                            
        function getPageStatusAlive(){
            
            button.addEventListener('click', function() {

            let statusAlive = [];
            statusAlive = filterStatus.alive(allCharacters);
            let page = [];
            page = statusAlive.slice(i, i+20);

            const elementOrderedList = document.getElementById('listCharacters');
            elementOrderedList.innerHTML = "";

            for (let i=0; i < page.length; i++) {

                const result = page[i];                 
                const elementLi = document.createElement("li"); 
                const elementText = document.createTextNode(result.name + ", Specie: " + result.species + ", Status: " + result.status + ", Gender: " + result.gender);         // Create a text node
                
                const image = result.image; 
                const elementImage = document.createElement("img"); 
                elementImage.src = image;
                elementImage.alt = name;
                elementLi.appendChild(elementImage); 
                elementOrderedList.appendChild(elementLi);
                elementLi.appendChild(elementText);
            }
                console.log(i);
            })
        }
        getPageStatusAlive();
    }
}
document.querySelector('#alive').addEventListener('click', getListStatusAlive);



const getListStatusDead = () => {  

    let statusDead = [];
    statusDead = filterStatus.dead(allCharacters);

    const buttonsContainer = document.getElementById("buttonsContainer");
    buttonsContainer.innerHTML = "";

    const titleContainer = document.getElementById("titleContainer");
    titleContainer.innerText = "";

    const title = document.createElement("h2");
    const titleText = document.createTextNode("List of Characters Status: Dead");
    title.appendChild(titleText);
    titleContainer.appendChild(title);

    let page = [];
    page = statusDead.slice(0, 20);

    const elementOrderedList = document.getElementById('listCharacters');
    elementOrderedList.innerHTML = "";

    for (let i=0; i < page.length; i++) {

        const result = page[i];
        const elementLi = document.createElement("li");
        const elementText = document.createTextNode(result.name + ", Specie: " + result.species + ", Status: " + result.status + ", Gender: " + result.gender);         // Create a text node
        
        const image = result.image;
        const elementImage = document.createElement("img");
        elementImage.src = image;
        elementImage.alt = name;
        elementLi.appendChild(elementImage); 
        elementOrderedList.appendChild(elementLi);
        elementLi.appendChild(elementText); 
    }

    for (let i=0; i < statusDead.length; i=i+20 ){

        const button = document.createElement("button");
        const buttonText = document.createTextNode(parseInt(i / 20) + 1);
        button.appendChild(buttonText);
        buttonsContainer.appendChild(button);
                            
        function getPageStatusDead(){
            
            button.addEventListener("click", function() {

            let statusDead = [];
            statusDead = filterStatus.dead(allCharacters);
            let page = [];
            page = statusDead.slice(i, i+20);

            const elementOrderedList = document.getElementById('listCharacters');
            elementOrderedList.innerHTML = "";

            for (let i=0; i < page.length; i++) {

                const result = page[i];
                const elementLi = document.createElement("li"); 
                const elementText = document.createTextNode(result.name + ", Specie: " + result.species + ", Status: " + result.status + ", Gender: " + result.gender);         // Create a text node
                
                const image = result.image;  
                const elementImage = document.createElement("img");
                elementImage.src = image;
                elementImage.alt = name;
                elementLi.appendChild(elementImage); 
                elementOrderedList.appendChild(elementLi);
                elementLi.appendChild(elementText); 
            }
                console.log(i);
            })
        }
        getPageStatusDead();
    }
}
document.querySelector('#dead').addEventListener('click', getListStatusDead);



const getListStatusUnknown = () => {

    let statusUnknown = [];
    statusUnknown = filterStatus.unknown(allCharacters);

    const buttonsContainer = document.getElementById("buttonsContainer");
    buttonsContainer.innerHTML = "";

    const titleContainer = document.getElementById("titleContainer");
    titleContainer.innerText = "";

    const title = document.createElement("h2");
    const titleText = document.createTextNode("List of Characters Status: Unknown");
    title.appendChild(titleText);
    titleContainer.appendChild(title);

    let page = [];
    page = statusUnknown.slice(0, 20);

    const elementOrderedList = document.getElementById('listCharacters');
    elementOrderedList.innerHTML = "";

    for (let i=0; i < page.length; i++) {

        const result = page[i];
        const elementLi = document.createElement("li");
        const elementText = document.createTextNode(result.name + ", Specie: " + result.species + ", Status: " + result.status + ", Gender: " + result.gender);         // Create a text node
        
        const image = result.image;
        const elementImage = document.createElement("img");
        elementImage.src = image;
        elementImage.alt = name;
        elementLi.appendChild(elementImage); 
        elementOrderedList.appendChild(elementLi);
        elementLi.appendChild(elementText); 
    }

    for (let i=0; i < statusUnknown.length; i=i+20 ){

        const button = document.createElement("button");
        const buttonText = document.createTextNode(parseInt(i / 20) + 1);
        button.appendChild(buttonText);
        buttonsContainer.appendChild(button);
                            
        function getPageStatusUnknown(){
            
            button.addEventListener("click", function() {

            let statusUnknown = [];
            statusUnknown = filterStatus.unknown(allCharacters);
            let page = [];
            page = statusUnknown.slice(i, i+20);

            const elementOrderedList = document.getElementById('listCharacters');
            elementOrderedList.innerHTML = "";

            for (let i=0; i < page.length; i++) {

                const result = page[i];
                const elementLi = document.createElement("li"); 
                const elementText = document.createTextNode(result.name + ", Specie: " + result.species + ", Status: " + result.status + ", Gender: " + result.gender);         // Create a text node
                
                const image = result.image; 
                const elementImage = document.createElement("img"); 
                elementImage.src = image;
                elementImage.alt = name;
                elementLi.appendChild(elementImage); 
                elementOrderedList.appendChild(elementLi);
                elementLi.appendChild(elementText); 
            }
                console.log(i);
            })
        }
        getPageStatusUnknown();
    }
}
document.querySelector('#unknown').addEventListener('click', getListStatusUnknown);


const getListGenderMale = () => {

    let genderMale = [];
    genderMale = filterGender.male(allCharacters);

    const buttonsContainer = document.getElementById("buttonsContainer");
    buttonsContainer.innerHTML = "";

    const titleContainer = document.getElementById("titleContainer");
    titleContainer.innerText = "";

    const title = document.createElement("h2");
    const titleText = document.createTextNode("List of Characters Gender: Male");
    title.appendChild(titleText);
    titleContainer.appendChild(title);

    let page = [];
    page = genderMale.slice(0, 20);

    const elementOrderedList = document.getElementById('listCharacters');
    elementOrderedList.innerHTML = "";

    for (let i=0; i < page.length; i++) {

        const result = page[i];
        const elementLi = document.createElement("li");
        const elementText = document.createTextNode(result.name + ", Specie: " + result.species + ", Status: " + result.status + ", Gender: " + result.gender);         // Create a text node
        
        const image = result.image;
        const elementImage = document.createElement("img");
        elementImage.src = image;
        elementImage.alt = name;
        elementLi.appendChild(elementImage); 
        elementOrderedList.appendChild(elementLi);
        elementLi.appendChild(elementText); 
    }

    for (let i=0; i < genderMale.length; i=i+20 ){

        const button = document.createElement("button");
        const buttonText = document.createTextNode(parseInt(i / 20) + 1);
        button.appendChild(buttonText);
        buttonsContainer.appendChild(button);
                            
        function getPageGenderMale(){
            
            button.addEventListener("click", function() {

            let genderMale = [];
            genderMale = filterGender.male(allCharacters);
            let page = [];
            page = genderMale.slice(i, i+20);

            const elementOrderedList = document.getElementById('listCharacters');
            elementOrderedList.innerHTML = "";

            for (let i=0; i < page.length; i++) {

                const result = page[i];
                const elementLi = document.createElement("li"); 
                const elementText = document.createTextNode(result.name + ", Specie: " + result.species + ", Status: " + result.status + ", Gender: " + result.gender);         // Create a text node
                
                const image = result.image; 
                const elementImage = document.createElement("img"); 
                elementImage.src = image;
                elementImage.alt = name;
                elementLi.appendChild(elementImage); 
                elementOrderedList.appendChild(elementLi);
                elementLi.appendChild(elementText); 
            }
                console.log(i);
            })
        }
        getPageGenderMale();
    }
}
document.querySelector('#male').addEventListener('click', getListGenderMale);


const getListGenderFemale = () => {

    let genderFemale = [];
    genderFemale = filterGender.female(allCharacters);

    const buttonsContainer = document.getElementById("buttonsContainer");
    buttonsContainer.innerHTML = "";

    const titleContainer = document.getElementById("titleContainer");
    titleContainer.innerText = "";

    const title = document.createElement("h2");
    const titleText = document.createTextNode("List of Characters Gender: Female");
    title.appendChild(titleText);
    titleContainer.appendChild(title);

    let page = [];
    page = genderFemale.slice(0, 20);

    const elementOrderedList = document.getElementById('listCharacters');
    elementOrderedList.innerHTML = "";

    for (let i=0; i < page.length; i++) {

        const result = page[i];
        const elementLi = document.createElement("li");
        const elementText = document.createTextNode(result.name + ", Specie: " + result.species + ", Status: " + result.status + ", Gender: " + result.gender);         // Create a text node
        
        const image = result.image;
        const elementImage = document.createElement("img");
        elementImage.src = image;
        elementImage.alt = name;
        elementLi.appendChild(elementImage); 
        elementOrderedList.appendChild(elementLi);
        elementLi.appendChild(elementText); 
    }

    for (let i=0; i < genderFemale.length; i=i+20 ){

        const button = document.createElement("button");
        const buttonText = document.createTextNode(parseInt(i / 20) + 1);
        button.appendChild(buttonText);
        buttonsContainer.appendChild(button);
                            
        function getPageGenderFemale(){
            
            button.addEventListener("click", function() {

            let genderFemale = [];
            genderFemale = filterGender.female(allCharacters);
            let page = [];
            page = genderFemale.slice(i, i+20);

            const elementOrderedList = document.getElementById('listCharacters');
            elementOrderedList.innerHTML = "";

            for (let i=0; i < page.length; i++) {

                const result = page[i];
                const elementLi = document.createElement("li"); 
                const elementText = document.createTextNode(result.name + ", Specie: " + result.species + ", Status: " + result.status + ", Gender: " + result.gender);         // Create a text node
                
                const image = result.image; 
                const elementImage = document.createElement("img"); 
                elementImage.src = image;
                elementImage.alt = name;
                elementLi.appendChild(elementImage); 
                elementOrderedList.appendChild(elementLi);
                elementLi.appendChild(elementText);
            }
                console.log(i);
            })
        }
        getPageGenderFemale();
    }
}
document.querySelector('#female').addEventListener('click', getListGenderFemale);



const getListGenderGenderless = () => {

    let genderGenderless = [];
    genderGenderless = filterGender.genderless(allCharacters);

    const buttonsContainer = document.getElementById("buttonsContainer");
    buttonsContainer.innerHTML = "";

    const titleContainer = document.getElementById("titleContainer");
    titleContainer.innerText = "";

    const title = document.createElement("h2");
    const titleText = document.createTextNode("List of Characters Gender: Genderless");
    title.appendChild(titleText);
    titleContainer.appendChild(title);

    let page = [];
    page = genderGenderless.slice(0, 20);

    const elementOrderedList = document.getElementById('listCharacters');
    elementOrderedList.innerHTML = "";

    for (let i=0; i < page.length; i++) {

        const result = page[i];
        const elementLi = document.createElement("li");
        const elementText = document.createTextNode(result.name + ", Specie: " + result.species + ", Status: " + result.status + ", Gender: " + result.gender);         // Create a text node
       
        const image = result.image;
        const elementImage = document.createElement("img");
        elementImage.src = image;
        elementImage.alt = name;
        elementLi.appendChild(elementImage); 
        elementOrderedList.appendChild(elementLi);
        elementLi.appendChild(elementText); 
    }

    for (let i=0; i < genderGenderless.length; i=i+20 ){

        const button = document.createElement("button");
        const buttonText = document.createTextNode(parseInt(i / 20) + 1);
        button.appendChild(buttonText);
        buttonsContainer.appendChild(button);
                            
        function getPageGenderGenderless(){
            
            button.addEventListener("click", function() {

            let genderGenderless = [];
            genderGenderless = filterGender.genderless(allCharacters);
            let page = [];
            page = genderGenderless.slice(i, i+20);

            const elementOrderedList = document.getElementById('listCharacters');
            elementOrderedList.innerHTML = "";

            for (let i=0; i < page.length; i++) {

                const result = page[i];
                const elementLi = document.createElement("li");
                const elementText = document.createTextNode(result.name + ", Specie: " + result.species + ", Status: " + result.status + ", Gender: " + result.gender);         // Create a text node
                
                const image = result.image;
                const elementImage = document.createElement("img");
                elementImage.src = image;
                elementImage.alt = name;
                elementLi.appendChild(elementImage); 
                elementOrderedList.appendChild(elementLi);
                elementLi.appendChild(elementText);
            }
                console.log(i);
            })
        }
        getPageGenderGenderless();
    }
}
document.querySelector('#genderless').addEventListener('click', getListGenderGenderless);



const getListGenderUnknown = () => {

    let genderUnknown = [];
    genderUnknown = filterGender.unknown(allCharacters);

    const buttonsContainer = document.getElementById("buttonsContainer");
    buttonsContainer.innerHTML = "";

    const titleContainer = document.getElementById("titleContainer");
    titleContainer.innerText = "";

    const title = document.createElement("h2");
    const titleText = document.createTextNode("List of Characters Gender: Unknown");
    title.appendChild(titleText);
    titleContainer.appendChild(title);

    let page = [];
    page = genderUnknown.slice(0, 20);

    const elementOrderedList = document.getElementById('listCharacters');
    elementOrderedList.innerHTML = "";

    for (let i=0; i < page.length; i++) {

        const result = page[i];
        const elementLi = document.createElement("li");
        const elementText = document.createTextNode(result.name + ", Specie: " + result.species + ", Status: " + result.status + ", Gender: " + result.gender);         // Create a text node
        
        const image = result.image;
        const elementImage = document.createElement("img");
        elementImage.src = image;
        elementImage.alt = name;
        elementLi.appendChild(elementImage); 
        elementOrderedList.appendChild(elementLi);
        elementLi.appendChild(elementText);
    }

    for (let i=0; i < genderUnknown.length; i=i+20 ){

        const button = document.createElement("button");
        const buttonText = document.createTextNode(parseInt(i / 20) + 1);
        button.appendChild(buttonText);
        buttonsContainer.appendChild(button);
                            
        function getPageGenderUnknown(){
            
            button.addEventListener("click", function() {

            let genderUnknown = [];
            genderUnknown = filterGender.unknown(allCharacters);
            let page = [];
            page = genderUnknown.slice(i, i+20);

            const elementOrderedList = document.getElementById('listCharacters');
            elementOrderedList.innerHTML = "";

            for (let i=0; i < page.length; i++) {

                const result = page[i];
                const elementLi = document.createElement("li");
                const elementText = document.createTextNode(result.name + ", Specie: " + result.species + ", Status: " + result.status + ", Gender: " + result.gender);         // Create a text node
                
                const image = result.image;
                const elementImage = document.createElement("img"); 
                elementImage.src = image;
                elementImage.alt = name;
                elementLi.appendChild(elementImage); 
                elementOrderedList.appendChild(elementLi);
                elementLi.appendChild(elementText); 
            }
                console.log(i);
            })
        }
        getPageGenderUnknown();
    }
}
document.querySelector('#unknownGender').addEventListener('click', getListGenderUnknown);




const getListAtoZ = () => {

    let sortedAscending = [];
    sortedAscending = order.ascending(allCharacters);

    const buttonsContainer = document.getElementById("buttonsContainer");
    buttonsContainer.innerHTML = "";

    const titleContainer = document.getElementById("titleContainer");
    titleContainer.innerText = "";

    const title = document.createElement("h2");
    const titleText = document.createTextNode("Sorted A to Z");
    title.appendChild(titleText);
    titleContainer.appendChild(title);

    let page = [];
    page = sortedAscending.slice(0, 20);

    const elementOrderedList = document.getElementById('listCharacters');
    elementOrderedList.innerHTML = "";

    for (let i=0; i < page.length; i++) {

        const result = page[i];
        const elementLi = document.createElement("li");
        const elementText = document.createTextNode(result.name + ", Specie: " + result.species + ", Status: " + result.status + ", Gender: " + result.gender);         // Create a text node
        
        const image = result.image;
        const elementImage = document.createElement("img");
        elementImage.src = image;
        elementImage.alt = name;
        elementLi.appendChild(elementImage); 
        elementOrderedList.appendChild(elementLi);
        elementLi.appendChild(elementText); 
    }

    for (let i=0; i < sortedAscending.length; i=i+20 ){

        const button = document.createElement("button");
        const buttonText = document.createTextNode(parseInt(i / 20) + 1);
        button.appendChild(buttonText);
        buttonsContainer.appendChild(button);
                            
        function getPageAtoZ(){
            
            button.addEventListener("click", function() {

            let sortedAscending = [];
            sortedAscending = order.ascending(allCharacters);
            let page = [];
            page = sortedAscending.slice(i, i+20);

            const elementOrderedList = document.getElementById('listCharacters');
            elementOrderedList.innerHTML = "";

            for (let i=0; i < page.length; i++) {

                const result = page[i];
                const elementLi = document.createElement("li");
                const elementText = document.createTextNode(result.name + ", Specie: " + result.species + ", Status: " + result.status + ", Gender: " + result.gender);         // Create a text node
                
                const image = result.image; 
                const elementImage = document.createElement("img");
                elementImage.src = image;
                elementImage.alt = name;
                elementLi.appendChild(elementImage); 
                elementOrderedList.appendChild(elementLi);
                elementLi.appendChild(elementText); 
            }
                console.log(i);
            })
        }
        getPageAtoZ();
    }
}
document.querySelector('#orderAtoZ').addEventListener('click', getListAtoZ);



const getListZtoA = () => {

    let sortedDescending = [];
    sortedDescending = order.descending(allCharacters);

    const buttonsContainer = document.getElementById("buttonsContainer");
    buttonsContainer.innerHTML = "";

    const titleContainer = document.getElementById("titleContainer");
    titleContainer.innerText = "";

    const title = document.createElement("h2");
    const titleText = document.createTextNode("Sorted Z to A");
    title.appendChild(titleText);
    titleContainer.appendChild(title);

    let page = [];
    page = sortedDescending.slice(0, 20);

    const elementOrderedList = document.getElementById('listCharacters');
    elementOrderedList.innerHTML = "";

    for (let i=0; i < page.length; i++) {

        const result = page[i];
        const elementLi = document.createElement("li");
        const elementText = document.createTextNode(result.name + ", Specie: " + result.species + ", Status: " + result.status + ", Gender: " + result.gender);         // Create a text node
        
        const image = result.image;
        const elementImage = document.createElement("img");
        elementImage.src = image;
        elementImage.alt = name;
        elementLi.appendChild(elementImage); 
        elementOrderedList.appendChild(elementLi);
        elementLi.appendChild(elementText);
    }

    for (let i=0; i < sortedDescending.length; i=i+20 ){

        const button = document.createElement("button");
        const buttonText = document.createTextNode(parseInt(i / 20) + 1);
        button.appendChild(buttonText);
        buttonsContainer.appendChild(button);
                            
        function getPageZtoA(){
            
            button.addEventListener("click", function() {

            let sortedDescending = [];
            sortedDescending = order.descending(allCharacters);
            let page = [];
            page = sortedDescending.slice(i, i+20);

            const elementOrderedList = document.getElementById('listCharacters');
            elementOrderedList.innerHTML = "";

            for (let i=0; i < page.length; i++) {

                const result = page[i];
                const elementLi = document.createElement("li"); 
                const elementText = document.createTextNode(result.name + ", Specie: " + result.species + ", Status: " + result.status + ", Gender: " + result.gender);         // Create a text node
                
                const image = result.image;
                const elementImage = document.createElement("img");
                elementImage.src = image;
                elementImage.alt = name;
                elementLi.appendChild(elementImage); 
                elementOrderedList.appendChild(elementLi);
                elementLi.appendChild(elementText); 
            }
                console.log(i);
            })
        }
        getPageZtoA();
    }
}
document.querySelector('#orderZtoA').addEventListener('click', getListZtoA);



function getListAll(){

    let leaveGender = document.getElementById("listGender");
    leaveGender.classList.add("hide");

    let leaveStatus = document.getElementById("listStatus");
    leaveStatus.classList.add("hide");

    let displaySpecies = document.getElementById("listSpecies");
    displaySpecies.classList.add("hide");

}
document.querySelector('#all').addEventListener('click', getListAll);


function getListSpecies(){

    let leaveGender = document.getElementById("listGender");
    leaveGender.classList.add("hide");

    let leaveStatus = document.getElementById("listStatus");
    leaveStatus.classList.add("hide");

    let displaySpecies = document.getElementById("listSpecies");
    displaySpecies.classList.remove("hide");

}
document.querySelector('#species').addEventListener('click', getListSpecies);
document.querySelector('#species').addEventListener('click', getListSpeciesHuman);


function getListGender(){

    let leaveSpecies = document.getElementById("listSpecies");
    leaveSpecies.classList.add("hide");

    let leaveStatus = document.getElementById("listStatus");
    leaveStatus.classList.add("hide");

    let displayStatus = document.getElementById("listGender");
    displayStatus.classList.remove("hide");

}
document.querySelector('#gender').addEventListener('click', getListGender);
document.querySelector('#gender').addEventListener('click', getListGenderMale);


function getListStatus(){

    let leaveGender = document.getElementById("listGender");
    leaveGender.classList.add("hide");

    let leaveSpecies = document.getElementById("listSpecies");
    leaveSpecies.classList.add("hide");

    let displayStatus = document.getElementById("listStatus");
    displayStatus.classList.remove("hide");

}
document.querySelector('#status').addEventListener('click', getListStatus);
document.querySelector('#status').addEventListener('click', getListStatusAlive);
