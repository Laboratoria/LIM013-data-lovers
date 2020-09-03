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
        const cardBox=document.createElement('div');
        cardBox.className='cardBox';
        currentDiv.appendChild(cardBox);
        const bothFace=document.createElement('div');
        bothFace.className="bothFace";
        cardBox.appendChild(bothFace);
        const div=document.createElement('div');
        div.className='frontCard';
        const img=document.createElement('img');
        img.className='personalImage'
        const nameDiv=document.createElement("div");
        nameDiv.className='nameDiv'
        const p=document.createElement('p');
        p.className='personalName'
        img.src=`${champ.splash}`;
        p.innerHTML=`${champ.name}`;
        bothFace.appendChild(div);
        div.appendChild(nameDiv);
        div.appendChild(img);
        nameDiv.appendChild(p);

        /* Back Card*/
        const backCard = document.createElement('div');
        bothFace.appendChild(backCard);
        backCard.className = 'back-card';

        const backCardName=document.createElement('h3');
        backCardName.innerHTML = `' ${champ.id} '`;
        backCard.appendChild(backCardName);

        const backCardTitle=document.createElement('p');
        backCardTitle.innerHTML = `' ${champ.title} '`;
        backCard.appendChild(backCardTitle);

        const backCardInfo=document.createElement("div");
        backCardInfo.className="backCardInfo"
        backCardInfo.innerHTML=`Info`;
        backCard.appendChild(backCardInfo);

        const infoAttack=document.createElement("p");
        infoAttack.innerHTML=`Attack: ${champ.info.attack}`;
        backCardInfo.appendChild(infoAttack);

        const infoDefense=document.createElement("p");
        infoDefense.innerHTML=`Defense: ${champ.info.defense}`;
        backCardInfo.appendChild(infoDefense);

        const infoMagic=document.createElement("p");
        infoMagic.innerHTML=`Magic: ${champ.info.magic}`;
        backCardInfo.appendChild(infoMagic);

        const infoDifficulty=document.createElement("p");
        infoDifficulty.innerHTML=`Difficulty: ${champ.info.defense}`;
        backCardInfo.appendChild(infoDifficulty);
        

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
