function numberSelectionSort(num) {
for (var i = 0; i < num.length; i++) {
  for (var j= i+1; j < num.length; j++) {
    if (num[i]>num[j]) {
      var firstNum =num[i]
      num[i]=num[j]
      num[j]=firstNum
    }
  }
}
return num;
}
console.log(numberSelectionSort([33,2,52,106,73]));//[2,33,52,73,106]
console.log(numberSelectionSort([13,5,22,99,11]));//[5,11,13,22,99]
