function selectionSort(arr) {
  for (let i = 0; i < arr.length-1; i += 1) {
    let smallestIdx = i;
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[j] < arr[smallestIdx]) {
        smallestIdx = j;
      }
    }

    if (smallestIdx !== i) {
      let temp = arr[i];
      arr[i] = arr[smallestIdx];
      arr[smallestIdx] = temp;
    }
  }

  return arr;
}

console.log(selectionSort([33, 2, 52, 106, 73])); // [2, 33, 52, 73, 106] 
console.log(selectionSort([13, 5, 22, 99, 11])); // [5, 11, 13, 22, 99]