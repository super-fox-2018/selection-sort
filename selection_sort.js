//input [33,2,52,106,73]

function selectionSort (arr){
    
    for(let a=0; a<=arr.length-1; a++){
        var temp = arr[a];
        for(let b=a+1; b<=arr.length-1; b++){
            if(arr[a]>=arr[b]){
                arr[a] = arr[b];
                arr[b] = temp;
                break;    
            }
        }
    }
    return arr;
}

console.log(selectionSort([33,2,52,106,73]))
console.log(selectionSort([13,5,22,99,11]))