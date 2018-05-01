function selectionSort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    var min = i; // first init

    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j; //exchange
      }
    }
    if (min !== i) {
      var change = arr[i];
      arr[i] = arr[min];
      arr[min] = change;
    }
  }
  return arr;
}

console.log(selectionSort([33, 2, 52, 106, 73])); // [2, 33, 52, 73, 106]
console.log(selectionSort([13, 5, 22, 99, 11])); // [5, 11, 13, 22, 99]
