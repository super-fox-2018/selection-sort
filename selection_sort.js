//input [33,2,52,106,73]

function selectionSort (arr){
    
    for(let a=0; a<=arr.length-1; a++){
        for(let b=a+1; b<=arr.length-1; b++){
            var temp = arr[a];
            if(arr[a]>=arr[b]){
                arr[a] = arr[b];
                arr[b] = temp;  
            }
        }
    }
    return arr;
}

console.log(selectionSort([40, 18, 22, 32, 90, 10, 10, 22, 8]))
console.log(selectionSort([13,5,22,99,11]))