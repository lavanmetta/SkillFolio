



function generateYears(startYear, endYear) {
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    return years;
  }
  
  export function years() {
    const yearsList = generateYears(2005, 2028); 
    return yearsList;
  }
  
  