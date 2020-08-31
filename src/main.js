import { filterByRol ,search,orderAsce} from './data.js';
import data from './data/lol/lol.js';
const allChampion=data.data;
const allArray=Object.values(allChampion)
//const allArray= allChampion => allChampion?allChampion:Object.values(allChampion);
/* --Funcion de crear estructura -- */
const cardStructure=(listData)=>{
    const createArray=Object.values(listData);
    const currentDiv=document.getElementById("imgChampions")
    currentDiv.innerHTML="";
    createArray.map((champ) => {
        const div=document.createElement('div');
        const img=document.createElement('img');
        const p=document.createElement('p');
        img.src=`${champ.splash}`;
        p.innerHTML=`${champ.name}`;
        currentDiv.appendChild(div)
        div.appendChild(p);
        div.appendChild(img);
    })
}
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
            console.log(term);
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
/* ------Búsqueda por orden alfabético--------- */
const order = document.querySelectorAll('.order');
console.log(order);
order.forEach((el)=>{
    el.addEventListener("click",()=>{
        const term=el.getAttribute('data-value');
        console.log(term);

        const filteredChampions = orderAsce(allArray, term);
        console.log(filteredChampions);
    })
})
window.onload = function() { 
    cardStructure(allArray);
};
/* ------Página Rol-------- */
const championsPage=document.getElementById("championsPage");
championsPage.addEventListener("click",e=>{
    e.preventDefault();
    document.getElementById("champPage").style.display="none"
    document.getElementById("rolPage").style.display="block"
})
