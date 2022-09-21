function findAverage(array) {
  let average = 0;

  if (array.length == 0) return average;

  array.forEach((number) => {
    average += number;
  });

  return average / array.length
}
