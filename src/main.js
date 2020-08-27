import { filterByRol, search} from './data.js';
import data from './data/lol/lol.js';
/* --Se muestran todos los campeones al iniciar la página-- */
const cardStructure=()=>{
    const champion=data.data;
    const obj=Object.values(champion);
obj.map((champ) => {
        const currentDiv=document.getElementById("imgChampions");
        const img=document.createElement('img');
        const p=document.createElement('p');
        img.src=`${champ.splash}`;
        p.innerHTML=`${champ.name}`;
        currentDiv.appendChild(p);
        currentDiv.appendChild(img);
    });
};
console.log(cardStructure);
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
            const lol=data.data;
            const champ=Object.values(lol);
            console.log(champ);
            const championByType = filterByRol(champ, term);
            console.log(championByType);
            if (term==="All") {
                cardStructure(champ);
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
    console.log(search);
    const lol=data.data;
    const champ=Object.values(lol)
    const champByName=search(champ,searchName);
    console.log(champByName);
});
           /* const crearCartasLol = (filterByRol => {   
                filterByRol.forEach((champ) => {
                    let templateListOfCards = '';
                    const currentDiv=document.getElementById("imgChampions");
                    const img=document.createElement('img')
                    const p=document.createElement('p')
                    img.src=`${champ.splash}`;
                    p.innerHTML=`${champ.name}`;
                    currentDiv.appendChild(p);
                    currentDiv.appendChild(img);
                   
                })
                */
            /*crearCartasLol(championByType);
            templateListOfCards+=currentDiv;
            })*/
   
   
       /* const filterClasses = (element) => {
            element.addEventListener('click', () => {
                const term = element.getAttribute('data-value');
                const list=document.getElementById("imgChampions")
                list.innerHTML = '';
                const filteredChampions = filterByRol(championList,term);
                if (term === 'Tank') {
                    functionCardsStructure(championList);
                } else {
                    functionCardsStructure(filteredChampions);
                }
            });
        }; */
