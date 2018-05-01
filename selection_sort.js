function selectionSort(input) {
  for (var i = 0; i < input.length - 1; i++) {
    var min = i;
    var isSorted = false

    for (var j = i+1; j < input.length; j++) {
      if (input[j] < input[min]) {
        min = j;
        isSorted = true;
      }
    }

    if (isSorted === true) {
      var temp = input[i];
      input[i] = input[min];
      input[min] = temp;
    }
  }

  return input;
}

console.log(selectionSort([33, 2, 52, 106, 73]));
console.log(selectionSort([13, 5, 22, 99, 11]));
