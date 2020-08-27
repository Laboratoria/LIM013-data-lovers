// estas funciones son de ejemplo
/*import data from './data/lol/lol.js'
const objectLol=data.data*/
//export const getNewArray=championList=>Object.values(championList);//
export const filterByRol= (championList,term) => {
    const filterRol= championList.filter(champion => (champion.tags.indexOf(term) !== -1 ? champion : false));
    console.log(filterRol)
    return filterRol;
};
export const  filtrarCamp=(championList,term)=>{
const filterData=championList.filter(el=>el.tags[0]==term|| el.tags[1]==term) ;
console.log(filterData)
    return filterData;
};

export const search=(championList,nameChamp)=>{
    const searchName=championList.map(el=>(el.name.toLowerCase().indexOf(nameChamp.toLowerCase())!==-1?el:false))
    console.log(searchName)
    return searchName; 
};
    

 

