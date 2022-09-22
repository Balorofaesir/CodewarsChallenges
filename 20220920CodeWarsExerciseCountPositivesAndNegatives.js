//Return an array, where the first element is the count of positives
//numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

//If the input is an empty array or is null, return an empty array.

//For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0) {
    return [];
  } else {
    let countOfPositives = 0
    let sumOfNegativeNumbers = 0

    input.forEach((number) => {
      if (number < 0) {
        sumOfNegativeNumbers += number;
      } else {
        countOfPositives += 1;
      }
    });

    return [countOfPositives, sumOfNegativeNumbers]
  }
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))