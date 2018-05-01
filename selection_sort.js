'use strict'

function selectionSort(arrNumber) {
    for(let i = 0; i < arrNumber.length; i++) {
        for(let j = i+1; j < arrNumber.length; j++) {
            if(arrNumber[i] > arrNumber[j]) {
                var temp = arrNumber[i];
                arrNumber[i] = arrNumber[j];
                arrNumber[j] = temp;
            }
        }
    }
    return arrNumber;
}

console.log(selectionSort([33, 2, 52, 106, 73]));
console.log(selectionSort([13, 5, 22, 99, 11]));