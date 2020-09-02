import { filterByRol ,search,order} from './data.js';
import data from './data/lol/lol.js';
/* -------Menu de Navegacion ---------- */
const toggle = document.querySelector(".btnMenu");
toggle.addEventListener("click",()=>{
    var menuLat = document.querySelector(".menuLateral");
    if (menuLat.className === "menuLateral") {
      menuLat.className += " responsive";
    } else {
      menuLat.className = "menuLateral";
    }
  })

  /* -------Estructura de la tarjeta  ---------- */
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
        const nameDiv=document.createElement('div')
        nameDiv.className="nameDiv"
        const p=document.createElement('p');
        p.className="pFront"
        p.innerHTML=`${champ.name}`;
        currentDiv.appendChild(div);
        div.appendChild(nameDiv);
        nameDiv.appendChild(p);
        /* Back Card*/
        const backCard = document.createElement('div');
        div.appendChild(backCard);
        backCard.className = 'back-card';
        const backCardName=document.createElement('h2');
        backCardName.className="backCardName"
        backCardName.innerHTML=`' ${champ.name} '`;
        const backCardTitle = document.createElement('h3');
        backCardTitle.innerHTML = `' ${champ.title} '`;
        backCard.appendChild(backCardName),
        backCard.appendChild(backCardTitle);

        const backCardInfo=document.createElement("div");
        backCard.appendChild(backCardInfo);
        
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
