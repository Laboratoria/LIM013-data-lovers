// estas funciones son de ejemplo
/*import data from './data/lol/lol.js'
const objectLol=data.data*/
//export const getNewArray=championList=>Object.values(championList);//
export const filterByRol= (championList,term) => {
    const filterRol= championList.filter(champion => (champion.tags.indexOf(term) !== -1 ? champion : false));
    return filterRol;
};

export const search=(championList,nameChamp)=>{
    const searchName=championList.filter(el=>(el.name.toLowerCase().indexOf(nameChamp.toLowerCase())!==-1?el:false))
    return searchName; 
};

export const order=(championList,term)=>{
    const sort=championList.sort(()=> term ==='AZ' ? 1:-1);
    return sort
    }

export const averageInfo = (property, championList) =>{
    const avg=championList.reduce(
    (acc, champion) => acc + champion.info[property], 0,) / championList.length;
    return avg

}
export const rolDescription={
    Mage:"Los magos son campeones que normalmente poseen un gran alcance, daño de área de efecto basado en habilidades y control de masas, y que usan todas estas fortalezas en conjunto para atrapar y destruir enemigos desde la distancia.",
    Assassin:"Los Slayers son campeones con gran movilidad que se especializan en daño por ráfaga de un solo objetivo. Lo que generalmente les falta en resistencia, lo compensan con creces con su capacidad para cubrir rápidamente grandes distancias, matar objetivos prioritarios y retirarse con la misma rapidez.",
    Marksman:"Los tiradores son campeones a distancia cuyo poder gira casi exclusivamente en torno a sus ataques básicos : usando su alcance para causar daño continuo masivo desde la distancia, los tiradores son capaces de derribar incluso al oponente más duro cuando se colocan detrás de la seguridad de su equipo.",
    Fighter:"son un grupo diverso de combatientes de corto alcance que se destacan tanto en infligir daños como en sobrevivir.",
    Tank:"Absorben el daño de otros campeones, ayudan a controlar a las multitudes y aturden a los enemigos ADC.",
    Support:"Ayudan a sus aliados con una potente utilidad y mantienen a raya a los enemigos con el control de multitudes",
};
 export const description=(rol,objeto)=>{
    const des=Object.values(objeto).map((arr)=>{
        rol:value
        
    })
 }
 



