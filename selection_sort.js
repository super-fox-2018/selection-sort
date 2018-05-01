var selectionSort = (x) =>{
    var tempInd = 0
    var checkedInd = 0
    var temporary = x[checkedInd]
    while(checkedInd<x.length){
        for (i=checkedInd+1;i<x.length;i++){
            if(temporary>x[i]){
                temporary = x[i]
                tempInd = i
            }
        }
        if(temporary !== x[checkedInd]){
            temp = x[checkedInd]
            x[checkedInd] = temporary
            x[tempInd] = temp
        }
        checkedInd++
        temporary = x[checkedInd]
    }
    return x
}

console.log(selectionSort([1,5,2,3,7,6,4]))