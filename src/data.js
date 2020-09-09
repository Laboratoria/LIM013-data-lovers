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



