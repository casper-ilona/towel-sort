
// You should implement your task here.

module.exports = function towelSort (m) {
  if (!m) {
    return [];
  }
  return m.reduce ((result,value,index) => {
    if(index % 2 ) {
      result.push (...value.reverse());
    } else {
      result.push(...value);
    }
    return result;
  }, []);
  
  
};
