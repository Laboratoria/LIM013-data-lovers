import order from './data.js';
import data from './data/lol/lol.js';

const datos = data.data,
  filter = document.getElementById("filter"),
  arrayLegends = Object.values(datos),
  legends_container = document.getElementById('legends_container'),
  pagination_element = document.getElementById('pagination'),
  inputSearch = document.querySelector('#inputSearch');

/*MENU BURGUER */
let button = document.getElementById('icon');
let links = document.getElementById('links');
let count = 0;

button.addEventListener('click', () => {
  if (count == 0) {
    links.className = ('links two');
    count = 1;
  } else {
    links.classList.remove('one');
    links.className = ('links one');
    count = 0;
  }
})

/*---LISTAR EN EL HTML---*/
const listLegends = (name, img, title, blurb, attack, defense, magic) => {

  const legend = document.createElement("div"),
    imgLegend = document.createElement("img"),
    nameLegend = document.createElement("div"),
    titleLegend = document.createElement("div");

  nameLegend.innerHTML += name;
  titleLegend.innerHTML += `<p>"${title}"</p>`;
  legend.setAttribute("class", "legends");
  legend.dataset.blurb = blurb;
  legend.dataset.attack = attack;
  legend.dataset.defense = defense;
  legend.dataset.magic = magic;

  imgLegend.setAttribute("class", "img-container");
  imgLegend.setAttribute("src", img);
  nameLegend.setAttribute("class", "name");
  titleLegend.setAttribute("class", "name");

  document.getElementById("legends_container").appendChild(legend);
  legend.appendChild(imgLegend);
  legend.appendChild(nameLegend);
  legend.appendChild(titleLegend);

};

/*---TRAER DATA---*/

const getLegends = (objLegend) => {
  for (let i = 0; i < objLegend.length; i++) {
    let name = objLegend[i].name;
    let img = objLegend[i].splash;
    let title = objLegend[i].title;
    let blurb = objLegend[i].blurb;
    let attack = objLegend[i].info.attack;
    let defense = objLegend[i].info.defense;
    let magic = objLegend[i].info.magic;
    //console.log('magic',magic);
    listLegends(name, img, title, blurb, attack, defense, magic);
  }
};

getLegends(arrayLegends);

/**PAGINACIÓN */
let current_page = 1;
let rows = 8;

const displayList = (items, wrapper, rows_per_page, page) => {
  wrapper.innerHTML = '';
  page--;

  let start = rows_per_page * page;
  let end = start + rows_per_page;
  let paginationItems = items.slice(start, end);
  //console.log('paginationItems', start)

  for (let i = 0; i < paginationItems.length; i++) {
    let item = paginationItems[i];
    listLegends
    //console.log('item',item.name)
    listLegends(item.name, item.splash, item.title, item.blurb, item.info.attack, item.info.defense, item.info.magic)
  }
/*MOSTRAR MODAL AL HACER CLICK EN CADA LEGEND */
const overlay = document.getElementById('overlay');
document.querySelectorAll('.legends_container .legends img').forEach((item) => {

  item.addEventListener('click', () => {
    console.log('item', item);
    const ruta = item.getAttribute('src');
    const description = item.parentNode.dataset.blurb;
    const infoAttack = item.parentNode.dataset.attack;
    const infoDefense = item.parentNode.dataset.defense;
    const infoMagic = item.parentNode.dataset.magic;

    overlay.classList.add('active');
    document.querySelector('#overlay img').src = ruta;
    document.querySelector('#overlay .description').innerHTML = description;
    document.querySelector('#overlay .info #one').innerHTML = 'Ataque:\n' + infoAttack;
    document.querySelector('#overlay .info #two').innerHTML = 'Defensa:\n' + infoDefense;
    document.querySelector('#overlay .info #three').innerHTML = 'Magia:\n' + infoMagic;
  });
});

document.querySelector('#btn-close').addEventListener('click', () => {
  overlay.classList.remove('active')
})

overlay.addEventListener('click', (e) => {
  /* overlay.classList.remove('active') */
  e.target.id === 'overlay' ? overlay.classList.remove('active') : ''
})
}

const setupPagination = (items, wrapper, rows_per_page) => {
  wrapper.innerHTML = '';

  let page_count = Math.ceil(items.length / rows_per_page);
  for (let i = 1; i < page_count + 1; i++) {
    let btn = paginationButton(i);
    wrapper.appendChild(btn);
  }
}

const paginationButton = (page) => {
  let button = document.createElement('button');
  button.innerText = page;

  if (current_page == page) button.classList.add('active');

  button.addEventListener('click', function () {
    current_page = page;
    displayList(arrayLegends, legends_container, rows, current_page);

    let current_btn = document.querySelector('.pagenumbers button.active');
    current_btn.classList.remove('active');

    button.classList.add('active')
  })

  return button;
}

displayList(arrayLegends, legends_container, rows, current_page);
setupPagination(arrayLegends, pagination_element, rows);


/*---FILTRO DE LA DATA---*/

filter.addEventListener('change', (e) => {
  const rol = e.target.value
  //console.log('rol', rol)
  if (rol == '' || rol == 'filter' || rol == 'All') {
    document.getElementById('legends_container').innerHTML = '';
    displayList(arrayLegends, legends_container, rows, current_page);
    setupPagination(arrayLegends, pagination_element, rows);
  } else {
    const result = order.filterLegend(arrayLegends, rol)
    document.getElementById('legends_container').innerHTML = '';
    displayList(result, legends_container, rows, current_page);
    setupPagination(result, pagination_element, rows);
  }
})

/*FILTRO DAÑO ATAQUE*/
const daño_de_ataque = document.querySelector('.daño_de_ataque');
daño_de_ataque.addEventListener('change', (e) => {
  legends_container.innerHTML = '';
  const attackrange = e.target.value;
  const prueba = order.filterRange(arrayLegends, attackrange);
  if (prueba == '') {
    legends_container.innerHTML +=
      `<div class="legends">
      <img class="img-container" src="./imagenes/notFound.gif" alt="">
      <div class="name">Not Found</div>
    </div>`
    setupPagination(prueba, pagination_element, rows);
  } else {
    document.getElementById('legends_container').innerHTML = '';
    displayList(prueba, legends_container, rows, current_page);
    setupPagination(prueba, pagination_element, rows);
  }
})

/*ORDER */
const selector = document.querySelector("#order");

selector.addEventListener("click", (e) => {
  const orderName = e.target.value;
  //console.log("prueba",e.target.value);
  if (orderName == "asc") {
    const asc = order.nameChampionAz(arrayLegends);
    document.getElementById("legends_container").innerHTML = "";
    displayList(asc, legends_container, rows, current_page);
    setupPagination(asc, pagination_element, rows);
  } else if (orderName == "desc") {
    const desc = order.nameChampionZa(arrayLegends);
    document.getElementById("legends_container").innerHTML = "";
    displayList(desc, legends_container, rows, current_page);
    setupPagination(desc, pagination_element, rows);
  }
});

/*BUSCADOR */
const search = () => {
  legends_container.innerHTML = '';
  const texto = inputSearch.value.toLowerCase();

  for (let legend of arrayLegends) {
    let nombre = legend.name.toLowerCase()
    if (nombre.indexOf(texto) != -1) {
      listLegends(legend.name, legend.splash, legend.title, legend.blurb, legend.info.attack, legend.info.defense, legend.info.magic)
      setupPagination(legends_container, pagination_element, rows);
    }
  }

  if (legends_container.innerHTML == '') {
    legends_container.innerHTML +=
      `<div class="legends">
      <img class="img-container" src="./imagenes/notFound.gif" alt="">
      <div class="name">Not Found</div>
    </div>`
    setupPagination(legends_container, pagination_element, rows);
  }
}

inputSearch.addEventListener('keyup', search);


