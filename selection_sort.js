function selectionSort(arr){
  var min = "";
  var position = 0;

  for(var i = 0; i < arr.length; i++){
    min = arr[i];
    for(var k = i; k < arr.length; k++){
      if(min > arr[k]){
      min = arr[k];
      position = k;
      arr[position] = arr[i];
      arr[i] = min;
      }
    }
  }

  return arr;
}

console.log(selectionSort([33,2,52,106,73]));
console.log(selectionSort([13,5,22,99,11]));
