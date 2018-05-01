function selectionSort(arr) {
  for(var i=0;i<arr.length;i++) {
    var temp=0
    var minValue=[]
    var minIndex=[]
    for(var j=i+1;j<arr.length;j++) {
      if(arr[j]<arr[i]) {
        minValue.push(arr[j])
        minIndex.push(j)
      } 
    }
    if(minValue.length !== 0 ) {
      temp=arr[i]
      arr[i]=Math.min(...minValue)
      arr[minIndex[minValue.indexOf(Math.min(...minValue))]]=temp
      //console.log(arr)  
    }
    
  }
   return arr
  
}	

console.log(selectionSort([33,2,52,106,73,1,5,7]));