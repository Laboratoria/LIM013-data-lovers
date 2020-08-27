import { filterByRol ,search,orderAsce} from './data.js';
import data from './data/lol/lol.js';
/* --Funcion de crear estructura -- */
const allChampion=data.data;
const allArray=Object.values(allChampion)
const cardStructure=(listData)=>{
    const createArray=Object.values(listData);
    createArray.map((champ) => {
        const currentDiv=document.getElementById("imgChampions");
        const div=document.createElement('div')
        const img=document.createElement('img')
        const p=document.createElement('p')
        img.src=`${champ.splash}`;
        p.innerHTML=`${champ.name}`;
        currentDiv.appendChild(div)
        div.appendChild(p);
        div.appendChild(img);
    })
}


console.log(cardStructure)
/* -------Efecto hover ---------- */
    const menuRol = document.querySelectorAll('#categoria a');
    menuRol.forEach((element) => {
		element.addEventListener("click", (event) => {
            event.preventDefault();
            menuRol.forEach((link) => link.classList.remove('active'));
            event.target.classList.add('active')
            
        })});
/* -------Filtrado por roles---------- */
    
    menuRol.forEach((el)=>{
        el.addEventListener("click",(e)=>{
            e.preventDefault();
            const term=el.getAttribute('data-value');
            console.log("term");
            const championByType = filterByRol(allArray, term);
            console.log(championByType);
            if (term==="All") {
                cardStructure(allArray);
            } else {
                cardStructure(championByType);
            }
          
        })
    })
/* ------Búsqueda por nombre---------- */
const inputclass=document.querySelector("#form-name2");
console.log(inputclass);
inputclass.addEventListener("keyup",e=>{
    const searchName=e.target.value.toLowerCase();
    console.log(search);
    const champByName=search(allArray,searchName);
    cardStructure(champByName);
    console.log(champByName);
})
const order = document.querySelectorAll('.order');
order.forEach((option) => {
    option.addEventListener('click', () => {
        const term = option.getAttribute('value');
        const lol=data.data;
        const champ=Object.values(lol)
        const filteredChampions = sortData(champ, term);
        console.log(filteredChampions);
    })
})

