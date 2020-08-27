import data from "./data/lol/lol.js";
import {filterData, sortData } from './data.js';

/*--cargar la data--*/
const objData = data.data;
const arrayData = Object.values(objData);
containerOfAllFunctions(arrayData);

const sortKind = document.getElementById('lol-sort'); 
const inputSearch = document.getElementById('search-for-champion'); 
const searchbtton = document.getElementById('search-btn'); 
const arrayTag = Object.values(document.getElementsByClassName('filter-champ')); 

function containerOfAllFunctions (arrayChamp){
    const containerChamp = document.getElementById('container-list');
    const cardChamp = (arrayChamp) => {
    let newArrayChamp = [];
    let contend = [];
    containerChamp.value = '';
    for (let index=0; index<arrayChamp.length; index++){
      newArrayChamp.push(Object.assign({}, arrayChamp[index]));
    }
    for (let index = 0; index < newArrayChamp.length; index++) {
      contend.push (`
      <div class ="card-link">
        <a class="blog-card" id="${ newArrayChamp[index].id }" href="#openmodal${index}">
      <div>
        <img class="post-image " src="${ newArrayChamp[index].img}" />
        <div class="article-details" >
          <h1 class="post-name" id="${ newArrayChamp[index].id }">${ newArrayChamp[index].name} </h1>
          <h3 class="post-title" id="${ newArrayChamp[index].id }"> ${ newArrayChamp[index].title}</h3>
          <h3 class="post-title" id="${ newArrayChamp[index].id }"> ${ newArrayChamp[index].info.difficulty}</h3>
        </div>                   
      </div>
      </a>
      </div>

      <section id="openmodal${index}" class="modal-window">
        <div class = "modal-content" id="${ newArrayChamp[index.id]}">
        <a href="#" title="Close" class="modal-close">X</a>
        <img class="modal-img" src="${ newArrayChamp[index].splash }" />
        <div class="modal-info">
        <img src="${ newArrayChamp[index].img}"/>
        <h1>${ newArrayChamp[index].name}</h1>
        <h3>${ newArrayChamp[index].title}</h3>
        <p>${ newArrayChamp[index].blurb}</p>
        <p>${ newArrayChamp[index].tags}</p>
        <table>
        <tr>
          <th> Health Points (HP)</th>
          <th> HP per Level</th>
          <th> HP at Lvl. 5</th>
          <th> HP at Lvl. 10</th>
          <th> HP at Lvl. 15</th>
          <th> HP at Lvl. 18</th>
        </tr>
        <tr>
          <td>${ newArrayChamp[index].stats.hp}</td>
          <td>${ newArrayChamp[index].stats.hpperlevel}</td>
        </tr>
        </table>
        </div>
      </div>
      </section>`
      );
    }  
    containerChamp.innerHTML = contend.join(''); 
  };
  cardChamp(arrayChamp);
  const listChamp = (arrayRol) => {
    let arrayListChamp = [];
    arrayRol.forEach(tags => {
      tags.addEventListener('change', () => {
        if (tags.checked === true) {
          arrayListChamp.push(tags.value);
        } else {
          const x = arrayListChamp.indexOf(tags.value);
          arrayListChamp.splice(x, 1);
          cardChamp(arrayChamp);
        }
        cardChamp(filterData(arrayChamp, arrayListChamp)); 
      });
    });
  };
  listChamp(arrayTag);
  const search = () => {
    const listBySort = sortKind.options[sortKind.selectedIndex].value; 
    const arraySearch = window.data.searchData(arrayChamp, inputSearch.value);
    cardChamp(sortData(arraySearch, parseInt(listBySort[0]), parseInt(listBySort[1]))); 
  };

  const searchRolandOrder = () => {
    search();
    sortKind.addEventListener('change', search);
    searchbtton.addEventListener('click', search);
  };
  searchRolandOrder();
}