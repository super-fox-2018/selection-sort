let randomNumbers = [8, 5, 7, 1, 9, 3];

function selectionSort(number) {
  let min = 0;
  let minIndex = 0;
  for (var i = 0; i < number.length; i++) {
    min = number[i];
    minIndex = i;
    for (var j = i; j < number.length; j++) {
      if (number[j] < min) {
        min = number[j];
        minIndex = j;
      }
    }
    number[minIndex] = number[i];
    number[i] = min;
  }
  return number;
}

console.log(selectionSort(randomNumbers));
console.log(selectionSort([1, 2, 3, 4, 5, 6]));
