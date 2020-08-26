import order from './data.js';
import data from './data/lol/lol.js';

const datos = data.data,
  filter = document.getElementById("filter"),
  arrayLegends = Object.values(datos);

/*---LISTAR EN EL HTML---*/
const listLegends = (name, img, title) => {
  const legend = document.createElement("div"),
    imgLegend = document.createElement("img"),
    nameLegend = document.createElement("div"),
    titleLegend = document.createElement("div");

  nameLegend.innerHTML += name;
  titleLegend.innerHTML += `<p>"${title}"</p>`;
  legend.setAttribute("class", "legends");
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
    listLegends(name, img, title);
  }
};

getLegends(arrayLegends);

/*---FILTRO DE LA DATA---*/
filter.addEventListener('click', (e) => {
  const rol = e.target.id
  
  if (rol == null || rol == '' || rol == 'All') {
    getLegends(arrayLegends);
  } else {
    const result = order.filterLegend(arrayLegends, rol)
    document.getElementById('legends_container').innerHTML = '';
    getLegends(result)
  }
})

/*ORDER */
const selector = document.querySelector("#order");
selector.addEventListener("click", (e) => {
  const orderName = e.target.value;
  //console.log("prueba",e.target.value);
  if (orderName == "asc") {
    const prueba=order.nameChampionAz(arrayLegends);
    document.getElementById("legends_container").innerHTML = "";
    getLegends(prueba)
  }
  else if (orderName == "desc") {
    const prueba=order.nameChampionZa(arrayLegends);
    document.getElementById("legends_container").innerHTML = "";
    getLegends(prueba)
  }
});







/*ESTADÍSTICAS MÉTODO REDUCE (hpper level, mpper level, attack damage per level)*/
//const reducer = (acumulador, valorActual)=> nuevoAcumulador
//ejecutando función con array vacío
const plano =arrayLegends.reduce((acc, el)=> acc.concat(el), [])
//console.log(plano);
//const indexed= (arrayLegends[0].stats).reduce((acc, el) => ({
 // []
//}));
console.log(arrayLegends);
const level=1;

const estadisticas = arrayLegends.reduce(function(acc, el){
  if(level ===1){
    return acc,(el.stats.hpperlevel *1);
  }
},0)
console.log(estadisticas);



