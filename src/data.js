
export const pullData = (url) => { 
    let promise = fetch(url)                          // Call the fetch function passing the url of the API as a parameter
                    .then(data => data.json())        // Transform the data into json
                    .catch(function() {               // This is where you run code if the server returns any errors
                    console.error("Algo falló");
                    });        
    return promise;
};

export const dataApi = (url) => {
    if (!url) 
        url = "https://rickandmortyapi.com/api/character";
    pullData(url).then(data => {
        getList(data);
    }) 
};
   
export const clickButtonPrevious = () => {
    let url = document.getElementById('previous').getAttribute('url');
    dataApi(url);
};

export const clickButtonNext = () => {
    let url = document.getElementById('next').getAttribute('url');
    dataApi(url);
};

// Creating the list
// Adding li for each character, adding a text for each li
// We are using the prefix "element" for the DOM elements (document object model)

export const getList = (data) => {                             //This data is the Received Info

    const elementOrderedList = document.getElementById('listCharacters');
    elementOrderedList.innerHTML = "";

    for (let i=0; i < data.results.length; i++) {       // Takes "i-ésim0" results so 20 (it means, one character)
        
        const result = data.results[i];                 
        const name = result.name;                               // Takes the name of the character
        const image = result.image;                             // Takes the image of the character
        const elementLi = document.createElement("li");         // Create a <li> node
        const elementText = document.createTextNode(name + ", Specie: " + result.species + ", Gender: " + result.gender);         // Create a text node
        
        elementLi.appendChild(elementText); 

        const elementImage = document.createElement("img");     // Create a <li> node
        elementImage.src = image;
        elementImage.alt = name;
        elementLi.appendChild(elementImage); 

        elementOrderedList.appendChild(elementLi);

    }

    const elementButtonPrevious = document.getElementById('previous');
    elementButtonPrevious.setAttribute("url", data.info.prev);

    const elementButtonNext = document.getElementById('next');
    elementButtonNext.setAttribute("url", data.info.next);

}
        
dataApi();


// We start to filter by species using filter APIs links

export const dataApiHuman = (url) => {
    if (!url) 
        url = "https://rickandmortyapi.com/api/character/?species=human";
    pullData(url).then(data => {
        getList(data);
    }) 
};

export const clickHuman = () => {
    let url = document.getElementById('human').getAttribute('url');
    dataApiHuman(url);
};

export const dataApiAlien = (url) => {
    if (!url) 
        url = "https://rickandmortyapi.com/api/character/?species=alien";
    pullData(url).then(data => {
        getList(data);
    }) 
};

export const clickAlien = () => {
    let url = document.getElementById('alien').getAttribute('url');
    dataApiAlien(url);
};

export const dataApiHumanoid = (url) => {
    if (!url) 
        url = "https://rickandmortyapi.com/api/character/?species=humanoid";
    pullData(url).then(data => {
        getList(data);
    }) 
};

export const clickHumanoid = () => {
    let url = document.getElementById('humanoid').getAttribute('url');
    dataApiHumanoid(url);
};

export const dataApiAnimal = (url) => {
    if (!url) 
        url = "https://rickandmortyapi.com/api/character/?species=animal";
    pullData(url).then(data => {
        getList(data);
    }) 
};

export const clickAnimal = () => {
    let url = document.getElementById('animal').getAttribute('url');
    dataApiAnimal(url);
};

export const dataApiMytholog = (url) => {
    if (!url) 
        url = "https://rickandmortyapi.com/api/character/?species=mytholog";
    pullData(url).then(data => {
        getList(data);
    }) 
};

export const clickMytholog = () => {
    let url = document.getElementById('mytholog').getAttribute('url');
    dataApiMytholog(url);
};

export const dataApiRobot = (url) => {
    if (!url) 
        url = "https://rickandmortyapi.com/api/character/?species=robot";
    pullData(url).then(data => {
        getList(data);
    }) 
};

export const clickRobot = () => {
    let url = document.getElementById('robot').getAttribute('url');
    dataApiRobot(url);
};

export const dataApiUnknown = (url) => {
    if (!url) 
        url = "https://rickandmortyapi.com/api/character/?species=unknown";
    pullData(url).then(data => {
        getList(data);
    }) 
};

export const clickUnknown = () => {
    let url = document.getElementById('unknown').getAttribute('url');
    dataApiUnknown(url);
};

export const dataApiCronenberg = (url) => {
    if (!url) 
        url = "https://rickandmortyapi.com/api/character/?species=cronenberg";
    pullData(url).then(data => {
        getList(data);
    }) 
};

export const clickCronenberg = () => {
    let url = document.getElementById('cronenberg').getAttribute('url');
    dataApiCronenberg(url);
};

export const dataApiPoopybutthole = (url) => {
    if (!url) 
        url = "https://rickandmortyapi.com/api/character/?species=poopybutthole";
    pullData(url).then(data => {
        getList(data);
    }) 
};

export const clickPoopybutthole = () => {
    let url = document.getElementById('poopybutthole').getAttribute('url');
    dataApiPoopybutthole(url);
};

export const dataApiDisease = (url) => {
    if (!url) 
        url = "https://rickandmortyapi.com/api/character/?species=disease";
    pullData(url).then(data => {
        getList(data);
    }) 
};

export const clickDisease = () => {
    let url = document.getElementById('disease').getAttribute('url');
    dataApiDisease(url);
};

export const dataApiPlanet = (url) => {
    if (!url) 
        url = "https://rickandmortyapi.com/api/character/?species=planet";
    pullData(url).then(data => {
        getList(data);
    }) 
};

export const clickPlanet = () => {
    let url = document.getElementById('disease').getAttribute('url');
    dataApiPlanet(url);
};