// estas funciones son de ejemplo

const metodos= {

filtrarPokemon: function(data, type){
  const result= data.filter(e =>(e.type[0]===type || e.type[1]=== type));
  return result;
  }
};

export default metodos;


