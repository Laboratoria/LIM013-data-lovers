// estas funciones son de ejemplo



export const example = (poke) => {
  return`
  <div class="dataPoke">
      <img src="${poke.img}">
      <h2>"${poke.num}"</h2>      
      <p><strong>Nombre:</strong> "${poke.name}"</>
      <p><strong>Tipo:</strong>"${poke.type}"</p>
  </div>
  `;
};

