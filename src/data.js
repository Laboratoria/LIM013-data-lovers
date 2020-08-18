// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

//función para el top cinco//
const getTopFive = (data) => {
  const newArray = data.map(copyData => Object.assign({}, { name: copyData.name, hp: copyData.stats.hp, img: copyData.img }));
  let newArrayOrder = newArray.sort((higher, lessHigher) => {
    if (higher.hp <= lessHigher.hp) {
      return 1;
    } else {
      return -1;
    }
  });
  return newArrayOrder.slice(0, 5);
};


function containerFunctions(array) {
  // const array = Object.values(LOL.data);
  // Segundo diseño de templates
  const arrayTopFive = lol.getTopFive(array);
  // templatepara el top ten
  const templateListChampionTop = (list) => {
    let championsList = [];
    list.forEach((array) => {
      const templateList =
        `<div class='card-1'>
      <img class='champion' src='lol.js/${array.name}.png'></img>
      <h2 class='namechampion'>"${array.name}"</h2>
      <h3 class='hptext'><img class='img-hp' src='imagenes/puntovida.PNG'>PUNTOS DE VIDA : ${array.hp}</h3>
      </div>`;
      championsList += templateList;
    });
    document.getElementById('list-top-champions').innerHTML = championsList;
  };
  templateListChampionTop(arrayTopFive);
}