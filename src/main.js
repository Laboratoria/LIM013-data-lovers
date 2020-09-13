import { filterByRol ,search,order,averageInfo,rolDescription} from './data.js';
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
  });

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
        p.className='personalName';
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

        const img2=document.createElement('img');
        img2.src=`${champ.splash}`;
        img2.className="personalImage2";
        backCardInfo.appendChild(img2);

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
            const championByType = filterByRol(allArray, term);
            if (term==="All") {
                cardStructure(allArray);
            } else {
                cardStructure(championByType);
            }       
        })
    })
/* ------Búsqueda por nombre---------- */
const inputclass=document.querySelector("#form-name2");
inputclass.addEventListener("keyup",e=>{
    const searchName=e.target.value.toLowerCase();
    const champByName=search(allArray,searchName);
    cardStructure(champByName);
});
/* ------Ordenar descendente/ascendente---------- */
const orderSelect = document.querySelector('.order');
    orderSelect.addEventListener('change', () => {
        const term = orderSelect.value;

   
        const filteredChampions = order(allArray, term);

        cardStructure(filteredChampions);
    });

window.onload = function() { 
    cardStructure(allArray);
};
/* ------Página Lol-------- */
const lolPage=document.querySelector(".lolButton");
lolPage.addEventListener("click",e=>{
    e.preventDefault();
    document.getElementById("home").style.display="none";
    document.getElementById("statsRolPage").style.display="none";
    document.getElementById("championPage").style.display="none";
    document.getElementById("playProfessional").style.display="none";
    document.getElementById("aboutPage").style.display="block"; 
});
const lolPageLat=document.querySelector(".lolButton2");
lolPageLat.addEventListener("click",e=>{
    e.preventDefault();
    document.getElementById("home").style.display="none";
    document.getElementById("statsRolPage").style.display="none";
    document.getElementById("championPage").style.display="none"; 
    document.getElementById("playProfessional").style.display="none"; 
    document.getElementById("aboutPage").style.display="block";
});

/*-----Opciones de Página Lol----*/
const lolPage1=document.querySelector(".aboutGameButton");
lolPage1.addEventListener("click",e=>{
    e.preventDefault();
    document.getElementById("aboutGame").style.display="inline-flex";
    document.getElementById("aboutObjective").style.display="none";
    document.getElementById("aboutChampions").style.display="none";
    document.getElementById("aboutMap").style.display="none";
});
const lolPage2=document.querySelector(".aboutObjectiveButton");
lolPage2.addEventListener("click",e=>{
    e.preventDefault();
    document.getElementById("aboutGame").style.display="none";
    document.getElementById("aboutObjective").style.display="inline-flex";
    document.getElementById("aboutChampions").style.display="none";
    document.getElementById("aboutMap").style.display="none";
});
const lolPage3=document.querySelector(".aboutChampionButton");
lolPage3.addEventListener("click",e=>{
    e.preventDefault();
    document.getElementById("aboutGame").style.display="none";
    document.getElementById("aboutObjective").style.display="none";
    document.getElementById("aboutChampions").style.display="inline-flex";
    document.getElementById("aboutMap").style.display="none";
});
const lolPage4=document.querySelector(".aboutMapButton");
lolPage4.addEventListener("click",e=>{
    e.preventDefault();
    document.getElementById("aboutGame").style.display="none";
    document.getElementById("aboutObjective").style.display="none";
    document.getElementById("aboutChampions").style.display="none";
    document.getElementById("aboutMap").style.display="inline-flex";
});

/* ------Página Rol-------- */
const rolPage=document.querySelector(".championsButton");
rolPage.addEventListener("click",e=>{
    e.preventDefault();
    document.getElementById("home").style.display="none";
    document.getElementById("statsRolPage").style.display="none";
    document.getElementById("championPage").style.display="block";
    document.getElementById("playProfessional").style.display="none";
    document.getElementById("aboutPage").style.display="none";
});
const rolPageLat=document.querySelector(".championsButton2");
rolPageLat.addEventListener("click",e=>{
    e.preventDefault();
    document.getElementById("home").style.display="none";
    document.getElementById("statsRolPage").style.display="none";
    document.getElementById("championPage").style.display="block"; 
    document.getElementById("playProfessional").style.display="none";
    document.getElementById("aboutPage").style.display="none"; 
});
/* ------Página Estadísticas-------- */
  const statsPage=document.querySelector(".statButton");
statsPage.addEventListener("click",e=>{
    e.preventDefault();
    document.getElementById("home").style.display="none";
    document.getElementById("championPage").style.display="none";
    document.getElementById("statsRolPage").style.display="block";
    document.getElementById("playProfessional").style.display="none"; 
    document.getElementById("aboutPage").style.display="none";
});
const statsPageLat=document.querySelector(".statButton2");
statsPageLat.addEventListener("click",e=>{
    e.preventDefault();
    document.getElementById("home").style.display="none";
    document.getElementById("championPage").style.display="none";
    document.getElementById("statsRolPage").style.display="block";
    document.getElementById("playProfessional").style.display="none"; 
    document.getElementById("aboutPage").style.display="none";
});
/* ------Página Juega Pro-------- */
const playProPage=document.querySelector(".playPro");
playProPage.addEventListener("click",(e)=>{
    e.preventDefault();
    document.getElementById("home").style.display="none";
    document.getElementById("statsRolPage").style.display="none";
    document.getElementById("championPage").style.display="none";
    document.getElementById("playProfessional").style.display="block"; 
    document.getElementById("aboutPage").style.display="none"; 
})
const playProPage1=document.querySelector(".playPro2");
playProPage1.addEventListener("click",(e)=>{
    e.preventDefault();
    document.getElementById("home").style.display="none";
    document.getElementById("statsRolPage").style.display="none";
    document.getElementById("championPage").style.display="none";
    document.getElementById("playProfessional").style.display="block"; 
    document.getElementById("aboutPage").style.display="none"; 
})

/* ------Estadísticas por rol-------- */
const rolIcon=document.querySelectorAll(".imagen-categoria3 a");
rolIcon.forEach((el)=>{

    el.addEventListener('click',()=>{
        const clickRol=el.getAttribute('data-value');
        
        const cardRol=document.querySelector(".infoCard");
        cardRol.innerHTML="";


        const rolTittle=document.createElement("h1");
        rolTittle.innerHTML=`${clickRol}`
        cardRol.appendChild(rolTittle);

        const divDescription=document.createElement("p");
        divDescription.innerHTML=rolDescription[clickRol];
        cardRol.appendChild(divDescription);

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







