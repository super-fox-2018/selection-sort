function selectionSort(input){
    for (var i=0; i < input.length; i++){
        let currentMin = 0;
        let minIdx = 0;
        for (var j=i; j < input.length; j++){
            if (i === j){
                currentMin = input[i];
                minIdx = j;
            }else{
                //compare current minimum
                if (currentMin > input[j]){
                    currentMin = input[j];
                    minIdx = j;
                }
            }
        }
        //swap the current with current minimum
        input[minIdx] = input[i];
        input[i] = currentMin;
    }
    return input;
}

console.log(selectionSort([33,2,52,106,73]));
console.log(selectionSort([13,5,22,99,11]));
console.log(selectionSort([23,10,12,1,90]));