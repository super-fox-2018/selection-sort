// Selection sort

function selectionSort(num) {

    var sorted = num
    for(var x=0; x<sorted.length; x++) {
        var bun=x
        for(var y=x+1; y<sorted.length; y++) {
            
            if(sorted[y]<sorted[bun]) {
                bun=y
            }
        }
        var temp=sorted[x]
        sorted[x]=sorted[bun]
        sorted[bun]=temp
    }
    
    return sorted

}

console.log(selectionSort([33,2,52,106,73])) //[2,33,52,73,106]
console.log(selectionSort([13,5,22,99,11])) //[5,11,13,22,99]

