import { filterByRol ,search,order} from './data.js';
import data from './data/lol/lol.js';


const toggle = document.querySelector(".btnMenu");
toggle.addEventListener("click",()=>{
    var menuLat = document.querySelector(".menuLateral");
    if (menuLat.className === "menuLateral") {
      menuLat.className += " responsive";
    } else {
      menuLat.className = "menuLateral";
    }
  })


/* --Funcion de crear estructura -- */
const allChampion=data.data;
const allArray=Object.values(allChampion);
const cardStructure=(listData)=>{
    const createArray=Object.values(listData);
    const currentDiv=document.getElementById("imgChampions");
    currentDiv.innerHTML="";
    createArray.map((champ) => {
        const div=document.createElement('div');
        div.className='style';
        const img=document.createElement('img');
        img.className='personalimage'
        const p=document.createElement('p');
        p.className='personalname'
        img.src=`${champ.splash}`;
        p.innerHTML=`${champ.name}`;
        currentDiv.appendChild(div)
        div.appendChild(p);
        div.appendChild(img);
    });
};


console.log(cardStructure);
/* -------Efecto hover ---------- */
    const menuRol = document.querySelectorAll('#categoria a');
    menuRol.forEach((element) => {
		element.addEventListener("click", (event) => {
            event.preventDefault();
            menuRol.forEach((link) => link.classList.remove('active'));
            event.target.classList.add('active');
            
        });
    });
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
          
        });
    });
/* ------Búsqueda por nombre---------- */
const inputclass=document.querySelector("#form-name2");
console.log(inputclass);
inputclass.addEventListener("keyup",e=>{
    const searchName=e.target.value.toLowerCase();
    console.log(searchName);
    const champByName=search(allArray,searchName);
    cardStructure(champByName);
    console.log(champByName);
});
const orderSelect = document.querySelector('.order');
    orderSelect.addEventListener('change', () => {
        const term = orderSelect.value;
        //const lol=data.data;
        //const champ=Object.values(lol)
        const filteredChampions = order(allArray, term);
        console.log(filteredChampions);
        cardStructure(filteredChampions);
    });


window.onload=function(){
    cardStructure(allArray);
};