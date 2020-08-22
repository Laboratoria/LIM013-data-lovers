// estas funciones son de ejemplo

/* export const filter = (data) => {
  return 'example';
};
 */

 const filter = {

  filterLegend: (data) => {
    data.filter(
      (objLegend) => {
        return objLegend.tags.includes('Mage');
      }
    )
  }

 }

 export default filter;

 