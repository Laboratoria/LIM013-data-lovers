
import data from "./data/lol/lol.js";

const datos = data.data,
  search = document.querySelector(".search"),
  arrayLegends = Object.values(datos);

/*---LISTAR EN EL HTML---*/
const listLegends = (name, img) => {
  const legend = document.createElement("div"),
    imgLegend = document.createElement("img"),
    nameLegend = document.createElement("div");

  nameLegend.innerHTML += name;
  legend.setAttribute("class", "legends");
  imgLegend.setAttribute("class", "img-container");
  imgLegend.setAttribute("src", img);
  nameLegend.setAttribute("class", "name");

  document.getElementById("legends_container").appendChild(legend);
  legend.appendChild(imgLegend);
  legend.appendChild(nameLegend);
};

/*---TRAER DATA---*/

const getLegends = (objLegend) => {
  for (let i = 0; i < objLegend.length; i++) {
    let name = objLegend[i].name;
    let img = objLegend[i].splash;
    listLegends(name, img);
  }
};

getLegends(arrayLegends);
















const selector = document.querySelector("#order");
selector.addEventListener("click", (e) => {
  const orderName = e.target.value;
  //console.log("prueba",e.target.value);
  if (orderName == "asc") {
    const prueba=order.nameChampionAz(arrayLegends);
  }
  else if (orderName == "desc") {
    const prueba=order.nameChampionZa(arrayLegends);
    document.getElementById("legends_container").innerHTML = "";
    getLegends(prueba)
  }
});

import order from "./data.js";