const rickMortyApi = {
  
  render: () => {

    const urlCharacter = `https://rickandmortyapi.com/api/character/?page=${1}`;
    const container = document.querySelector('#container');
    let contentHTML = '';

    fetch(urlCharacter)
      .then(res => res.json())
      .then((data) => {
        for(const character of data.results) {
          let urlCharacter = character.id[0];
          contentHTML += `
            <div>
              <a href="${urlCharacter}">
                <img src="${character.image} " alt="${character.name}">
              </a>
              <h3 class="title">${character.name}</h3>
            </div>`;
        }
        container.innerHTML = contentHTML;
        })
  }

};

rickMortyApi.render();

  
export default  rickMortyApi