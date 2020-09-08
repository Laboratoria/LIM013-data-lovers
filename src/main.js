import { filterByRol ,search,order,averageInfo} from './data.js';
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
console.log(allArray)
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
        backCard.className = 'back-card'
    
        const backCardInfo=document.createElement("div");
        backCardInfo.className="backCardInfo";
        backCard.appendChild(backCardInfo);

        const backCardTitle=document.createElement('p');
        backCardTitle.innerHTML = `' ${champ.title} '`;
        backCardTitle.className="apodo";
        backCardInfo.appendChild(backCardTitle);

        const infoChamp=champ.info;
            for (var [key, value] of Object.entries(infoChamp)){
                const infoChampDiv=document.createElement("p");
                infoChampDiv.innerHTML=` ${key}:${value}`;
                backCardInfo.appendChild(infoChampDiv);
            }
    });
};
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
const rolPage=document.getElementById("championsButton");
rolPage.addEventListener("click",e=>{
    e.preventDefault();
    document.getElementById("home").style.display="none";
    document.getElementById("statsRolPage").style.display="none";
    document.getElementById("championPage").style.display="block";
    
});

/* ------Página Estadísticas-------- */
  const statsPage=document.getElementById("statButton");
statsPage.addEventListener("click",e=>{
    e.preventDefault();
    document.getElementById("home").style.display="none";
    document.getElementById("championPage").style.display="none";
    document.getElementById("statsRolPage").style.display="block";
});
/* ------Estadísticas por rol-------- */
const rolIcon=document.querySelectorAll(".imagen-categoria3 a");
console.log(rolIcon);
rolIcon.forEach((el)=>{
    el.addEventListener('click',()=>{
        const clickRol=el.getAttribute('data-value');
        console.log(clickRol);
        const cardRol=document.querySelector(".infoCard");
        cardRol.innerHTML="";
        const rolTittle=document.createElement("h1");
        rolTittle.innerHTML=`${clickRol}`
        cardRol.appendChild(rolTittle);
        const filterRol = filterByRol(allArray, clickRol);

        const averageInfoDiv=document.createElement("div");
        averageInfoDiv.classList="averageInfoDiv";
        cardRol.appendChild(averageInfoDiv);
        
        const attackAvgDiv=document.createElement("div");
        attackAvgDiv.classList="attackAvgDiv";
        const attackAvg = averageInfo('attack', filterRol);
        attackAvgDiv.innerHTML=`Attack: ${attackAvg.toFixed(1)}`;
        averageInfoDiv.appendChild(attackAvgDiv);

        const defenseAvgDiv=document.createElement("div");
        defenseAvgDiv.classList="defenseAvgDiv";
        const defenseAvg = averageInfo('defense', filterRol);
        defenseAvgDiv.innerHTML=`Defense: ${defenseAvg.toFixed(1)}`;
        averageInfoDiv.appendChild(defenseAvgDiv);

        const magicAvgDiv=document.createElement("div");
        magicAvgDiv.classList="magicAvgDiv";
        const magicAvg = averageInfo('magic', filterRol);
        magicAvgDiv.innerHTML=`Magic: ${magicAvg.toFixed(1)}`;
        averageInfoDiv.appendChild(magicAvgDiv);

        const difficultyAvgDiv=document.createElement("div");
        difficultyAvgDiv.classList="difficultyAvgDiv";
        const difficultyAvg = averageInfo('difficulty', filterRol);
        difficultyAvgDiv.innerHTML=`Difficulty: ${difficultyAvg.toFixed(1)}`;
        averageInfoDiv.appendChild(difficultyAvgDiv);  
    });
});





