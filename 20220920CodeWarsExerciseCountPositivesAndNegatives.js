//Return an array, where the first element is the count of positives
//numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

//If the input is an empty array or is null, return an empty array.

//For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0) {
    const array1 = [];
    return array1;
  } 
  else {
    let result1 = 0;
    let result2 = 0;

    input.forEach((numero) => {
      if (numero < 0) {
        result2 += numero;
      } else {
        result1 += 1;
      }
    });
    
    const array2 = [result1, result2];

    return (array2);
  }
}
