import { filterByRol ,search,order} from './data.js';
import data from './data/lol/lol.js';
const toggle = document.querySelector(".btnMenu");
console.log(toggle)
const menu = document.querySelector(".menuLateral ");
console.log(menu)

toggle.addEventListener("click",()=>{
    var x = document.querySelector(".menuLateral");
    if (x.className === "menuLateral") {
      x.className += " responsive";
    } else {
      x.className = "menuLateral";
    }
  })
const allChampion=data.data;
const allArray=Object.values(allChampion);
const cardStructure=(listData)=>{
    const createArray=Object.values(listData);
    const currentDiv=document.getElementById("imgChampions");
    currentDiv.innerHTML="";
    createArray.map((champ) => {
        const div=document.createElement('div');
        div.className="cardDiv"
        div.style.backgroundImage = `url("${champ.splash}")`;
        const p=document.createElement('p');
        p.className="pFront"

        p.innerHTML=`${champ.name}`;
        currentDiv.appendChild(div)
        div.appendChild(p);

    })
}
/* -------Efecto hover ---------- */
    const menuRol = document.querySelectorAll('#categoria a');
    menuRol.forEach((element) => {
		element.addEventListener("click", (event) => {
            event.preventDefault();
            menuRol.forEach((link) => {
                link.classList.remove('active');
                event.target.classList.add('active');
            })
        })
    });
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
    console.log(searchName);
    const champByName=search(allArray,searchName);
    cardStructure(champByName);
    console.log(champByName);
})
/* ------Búsqueda por orden alfabético--------- */
const orderSelect = document.querySelector('.order');
console.log(order);
orderSelect.addEventListener("click",()=>{
    const term=orderSelect.value
    console.log(term);
    const filteredChampions = order(allArray, term);
    console.log(filteredChampions);
    cardStructure(filteredChampions);
    })


window.onload = function() { 
    cardStructure(allArray);
};
/* ------Página Rol-------- */

/*const championsPage=document.getElementById("championsPage");*/
/*championsPage.addEventListener("click",e=>{
    e.preventDefault();
    document.getElementById("champPage").style.display="none"
    document.getElementById("rolPage").style.display="block"
})*/
