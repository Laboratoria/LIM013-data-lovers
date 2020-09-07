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
    const sort=championList.sort((a,b)=> term ==='AZ' ? 1:-1);
    console.log(sort);
        return sort
    }
/*export const orderZa=(championList,term)=>{
    const sort=championList.sort(()=>term==="ZA"?-1:1)
    console.log(sort);
    return sort
        }*/
/*export let averageInfo = (championList,value) =>championList.reduce((a, b) => a + b[value]) / championList.length;*/

export const averageInfo = (property, championList) => championList.reduce(
    (acc, champion) => acc + champion.info[property], 0,
) / championList.length;
 

