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

