 
import {filterStatus, filterSpecies, filterGender, order } from './data.js'

import data from './data/rickandmorty/rickandmorty.js';

const allCharacters = data.results;

// console.log(data);


const getListAllCharacters = () => {
    
    drawResults(allCharacters);
 
}
document.querySelector('#all').addEventListener('click', getListAllCharacters);


const getListSpeciesHuman = () => {
    
    let speciesHuman = [];
    speciesHuman = filterSpecies.human(allCharacters);

    drawResults(speciesHuman);
    
}
document.querySelector('#human').addEventListener('click', getListSpeciesHuman);



const getListSpeciesAlien = () => {

    let speciesAlien = [];
    speciesAlien = filterSpecies.alien(allCharacters);
    drawResults(speciesAlien);
    
}
document.querySelector('#alien').addEventListener('click', getListSpeciesAlien);



const getListSpeciesHumanoid = () => {

    let speciesHumanoid = [];
    speciesHumanoid = filterSpecies.humanoid(allCharacters);
    drawResults(speciesHumanoid);
    
}
document.querySelector('#humanoid').addEventListener('click', getListSpeciesHumanoid);


const getListSpeciesAnimal = () => {

    let specieAnimal = [];
    specieAnimal = filterSpecies.animal(allCharacters);
    drawResults(specieAnimal);
    
}
document.querySelector('#animal').addEventListener('click', getListSpeciesAnimal);



const getListSpeciesMytholog = () => {

    let specieMytholog = [];
    specieMytholog = filterSpecies.mytholog(allCharacters);
    drawResults(specieMytholog);
    
}
document.querySelector('#mytholog').addEventListener('click', getListSpeciesMytholog);



const getListSpeciesRobot = () => {

    let specieRobot = [];
    specieRobot = filterSpecies.robot(allCharacters);
    drawResults(specieRobot);
    
}
document.querySelector('#robot').addEventListener('click', getListSpeciesRobot);



const getListSpeciesUnknown = () => {

    let specieUnknown = [];
    specieUnknown = filterSpecies.unknown(allCharacters);
    drawResults(specieUnknown);
    
}
document.querySelector('#unknownSpecie').addEventListener('click', getListSpeciesUnknown);


const getListSpeciesCronenberg = () => {

    let specieCronenberg = [];
    specieCronenberg = filterSpecies.cronenberg(allCharacters);
    drawResults(specieCronenberg);
    
}
document.querySelector('#cronenberg').addEventListener('click', getListSpeciesCronenberg);


const getListSpeciesPoopybutthole = () => {

    let speciePoopybutthole = [];
    speciePoopybutthole = filterSpecies.poopybutthole(allCharacters);
    drawResults(speciePoopybutthole);
    
}
document.querySelector('#poopybutthole').addEventListener('click', getListSpeciesPoopybutthole);


const getListSpeciesDisease = () => {

    let specieDisease = [];
    specieDisease = filterSpecies.disease(allCharacters);
    drawResults(specieDisease);
    
}
document.querySelector('#disease').addEventListener('click', getListSpeciesDisease);



const getListStatusAlive = () => {

    let statusAlive = [];
    statusAlive = filterStatus.alive(allCharacters);
    drawResults(statusAlive);
    
}
document.querySelector('#alive').addEventListener('click', getListStatusAlive);


const getListStatusDead = () => {  

    let statusDead = [];
    statusDead = filterStatus.dead(allCharacters);
    drawResults(statusDead);
    
}
document.querySelector('#dead').addEventListener('click', getListStatusDead);


const getListStatusUnknown = () => {

    let statusUnknown = [];
    statusUnknown = filterStatus.unknown(allCharacters);
    drawResults(statusUnknown);
    
}
document.querySelector('#unknown').addEventListener('click', getListStatusUnknown);


const getListGenderMale = () => {

    let genderMale = [];
    genderMale = filterGender.male(allCharacters);
    drawResults(genderMale);
    
}
document.querySelector('#male').addEventListener('click', getListGenderMale);


const getListGenderFemale = () => {

    let genderFemale = [];
    genderFemale = filterGender.female(allCharacters);
    drawResults(genderFemale);
    
}
document.querySelector('#female').addEventListener('click', getListGenderFemale);


const getListGenderGenderless = () => {

    let genderGenderless = [];
    genderGenderless = filterGender.genderless(allCharacters);
    drawResults(genderGenderless);
    
}
document.querySelector('#genderless').addEventListener('click', getListGenderGenderless);


const getListGenderUnknown = () => {

    let genderUnknown = [];
    genderUnknown = filterGender.unknown(allCharacters);
    drawResults(genderUnknown);
    
}
document.querySelector('#unknownGender').addEventListener('click', getListGenderUnknown);


const getListAtoZ = () => {

    let sortedAscending = [];
    sortedAscending = order.ascending(allCharacters);
    drawResults(sortedAscending);
    
}
document.querySelector('#orderAtoZ').addEventListener('click', getListAtoZ);


const getListZtoA = () => {

    let sortedDescending = [];
    sortedDescending = order.descending(allCharacters);
    drawResults(sortedDescending);
    
}
document.querySelector('#orderZtoA').addEventListener('click', getListZtoA);



function getListAll(){

    let leaveGender = document.getElementById("listGender");
    leaveGender.classList.add("hide");

    let leaveStatus = document.getElementById("listStatus");
    leaveStatus.classList.add("hide");

    let leaveSpecies = document.getElementById("listSpecies");
    leaveSpecies.classList.add("hide");

    let leaveOrder = document.getElementById("listOrder");
    leaveOrder.classList.add("hide");

}
document.querySelector('#all').addEventListener('click', getListAll);


function getListSpecies(){

    let leaveGender = document.getElementById("listGender");
    leaveGender.classList.add("hide");

    let leaveStatus = document.getElementById("listStatus");
    leaveStatus.classList.add("hide");

    let leaveOrder = document.getElementById("listOrder");
    leaveOrder.classList.add("hide");

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

    let leaveOrder = document.getElementById("listOrder");
    leaveOrder.classList.add("hide");

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

    let leaveOrder = document.getElementById("listOrder");
    leaveOrder.classList.add("hide");

    let displayStatus = document.getElementById("listStatus");
    displayStatus.classList.remove("hide");

}
document.querySelector('#status').addEventListener('click', getListStatus);
document.querySelector('#status').addEventListener('click', getListStatusAlive);



function getListOrderAtoZ(){

    let leaveGender = document.getElementById("listGender");
    leaveGender.classList.add("hide");

    let leaveSpecies = document.getElementById("listSpecies");
    leaveSpecies.classList.add("hide");

    let leaveStatus = document.getElementById("listStatus");
    leaveStatus.classList.add("hide");

    let displayOrder = document.getElementById("listOrder");
    displayOrder.classList.remove("hide");

}
document.querySelector('#order').addEventListener('click', getListOrderAtoZ);
document.querySelector('#order').addEventListener('click', getListAtoZ);


function getListOrderZtoA(){

    let leaveGender = document.getElementById("listGender");
    leaveGender.classList.add("hide");

    let leaveSpecies = document.getElementById("listSpecies");
    leaveSpecies.classList.add("hide");

    let leaveStatus = document.getElementById("listStatus");
    leaveStatus.classList.add("hide");

    let displayOrder = document.getElementById("listOrder");
    displayOrder.classList.remove("hide");

}
document.querySelector('#order').addEventListener('click', getListOrderZtoA);
document.querySelector('#order').addEventListener('click', getListZtoA);



window.addEventListener('load', () => {
    document.getElementById('listCharacters').classList.add('images-loaded');
    const categoriesLinks = document.querySelectorAll('#navbar a');
    const speciesLinks = document.querySelectorAll('#listSpecies a');
    const genderLinks = document.querySelectorAll('#listGender a');
    const statusLinks = document.querySelectorAll('#listStatus a');

    categoriesLinks.forEach((element) => {
        element.addEventListener('click', (event) => {
            event.preventDefault();
            categoriesLinks.forEach((categoriesLinks) => categoriesLinks.classList.remove('active'));
            event.target.classList.add('active');
        });
    });
    speciesLinks.forEach((element) => {
        element.addEventListener('click', (event) => {
            event.preventDefault();
            speciesLinks.forEach((speciesLinks) => speciesLinks.classList.remove('active'));
            event.target.classList.add('active');
        });
    });
    genderLinks.forEach((element) => {
        element.addEventListener('click', (event) => {
            event.preventDefault();
            genderLinks.forEach((genderLinks) => genderLinks.classList.remove('active'));
            event.target.classList.add('active');
        });
    });
    statusLinks.forEach((element) => {
        element.addEventListener('click', (event) => {
            event.preventDefault();
            statusLinks.forEach((statusLinks) => statusLinks.classList.remove('active'));
            event.target.classList.add('active');
        });
    });
})


function drawResults(arrayData){

    const buttonsContainer = document.getElementById("buttonsContainer");
    buttonsContainer.innerHTML = "";

    let page = [];
    page = arrayData.slice(0, 20);

    const elementOrderedList = document.getElementById('listCharacters');
    elementOrderedList.innerHTML = "";

    for (let i=0; i < page.length; i++) {

        const result = page[i];
        const elementLi = document.createElement("div"); 

        elementLi.innerHTML = `<img src="${result.image}" alt="${result.name}">
        <h3>${result.name}</h3>
        <p>${result.species}</p>`;

        elementOrderedList.appendChild(elementLi);
    }

    for (let i=0; i < arrayData.length; i=i+20 ){

        const button = document.createElement("button");
        const buttonText = document.createTextNode(parseInt(i / 20) + 1);
        button.appendChild(buttonText);
        buttonsContainer.appendChild(button);

        function getPageCharacters(){
            
            button.addEventListener('click', function() {

            let page = [];
            page = arrayData.slice(i, i+20);

            const elementOrderedList = document.getElementById('listCharacters');
            elementOrderedList.innerHTML = "";

            for (let i=0; i < page.length; i++) {

                const result = page[i]; 
                const elementLi = document.createElement("div"); 

                elementLi.innerHTML = `<img src="${result.image}" alt="${result.name}">
                <h3 class="characterName">${result.name}</h3>
                <p class="characterSpecies">${result.species}</p>`;

                elementOrderedList.appendChild(elementLi);

                // const elementText = document.createTextNode(result.name + ", Specie: " + result.species + ", Status: " + result.status + ", Gender: " + result.gender);         // Create a text node
                
                // const image = result.image; 
                // const elementImage = document.createElement("img");
                // elementImage.src = image;
                // elementImage.alt = name;
                // elementLi.appendChild(elementImage); 
                // elementOrderedList.appendChild(elementLi);
                // elementLi.appendChild(elementText); 
            }
                console.log(i);
            })
        }
        getPageCharacters();
    }
}



// const list_element = document.getElementById('charactersList');
// let rows = 20;
// function DisplayList (items, wrapper, rows_per_page, page) {
//     wrapper.innerHTML = "";
//     page--;
//     let start = rows_per_page * page;
//     let end = start + rows_per_page;
//     let paginatedItems = items.slice(start, end);
//     for (let i = 0; i < paginatedItems.length; i++) {
//         let item = paginatedItems[i];

//         let item_element = document.createElement('div');

//         item_element.classList.add('item');

//         item_element.innerHTML = `<img src="${item.image}" alt="${item.name}">
//         <h2 class="characterName">${item.name}</h2>
//         <p>${item.species}</p>`;
//         wrapper.appendChild(item_element);
//     }
// }

// DisplayList(data.results, list_element, rows, current_page);