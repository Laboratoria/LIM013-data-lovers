// estas funciones son de ejemplo
/* 
export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
}; */

export const orderData = (data,condition) => {
  let result;
  if (condition==='a-z'){
    result=data.sort((a,b) => {
       if (a.name>b.name){
       return 1;
    }
       return -1;
    });
}
  else{
    result=data.sort((a,b) =>{
      if (a.name<b.name){
      return 1;
      }
      return -1;  
    });
  }
return result;
};