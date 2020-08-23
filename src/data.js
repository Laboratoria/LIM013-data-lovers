const filterLegend = (data, rol) => {
  const result = data.filter(
    (objLegend) => {
      return objLegend.tags.includes(rol);
    }
  )
  return result
}

export default filterLegend;

 