function countsheeps(array){
  var numberofsheeps = array.filter(item => item);
  return numberofsheeps.length;
}
var array = [false,false,true,false,true] 

countsheeps(array)
 
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);