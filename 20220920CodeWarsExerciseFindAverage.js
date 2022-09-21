function findAverage(array) {
  let average = 0;
  let sum = 0;

  if (array.length == 0) return average;

  array.forEach((number) => {
    sum += number;
  });

  return sum / array.length
}
console.log(findAverage([1,2]))
