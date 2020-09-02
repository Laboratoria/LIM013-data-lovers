// estas funciones son de ejemplo
/*import data from './data/lol/lol.js'
const objectLol=data.data*/
//export const getNewArray=championList=>Object.values(championList);//
export const filterByRol= (championList,term) => {
    const filterRol= championList.filter(champion => (champion.tags.indexOf(term) !== -1 ? champion : false));
    console.log(filterRol)
    return filterRol;
};

export const search=(championList,nameChamp)=>{
    const searchName=championList.filter(el=>(el.name.toLowerCase().indexOf(nameChamp.toLowerCase())!==-1?el:false))
    console.log(searchName)
    return searchName; 
};
export const order=(championList,term)=>{
    const sort=championList.sort((a,b)=>term==="AZ"?1:-1)
    console.log(sort);
        return sort
    }
export let averageInfo = (championList) =>championList.reduce((a, b) => a + b) / championList.length;
console.log(averageInfo([1,2,3,4,5]));


 

