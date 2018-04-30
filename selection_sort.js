function binary_search(index, test_array){
    for (var i=0; i<test_array.length; i++){
        for (var j=i+1; j<test_array.length; j++){
            for (var a=j; a>=0; a--){
                // console.log(a)
                if (test_array[i] > test_array[j]){
                    test_array[i]=test_array[j];
                    test_array[j]=test_array[i];
                  }
            }
        }
      }
    // console.log(test_array)
    for (var x=0; x<test_array.length; x++){
        if(index===test_array[x]){
            return x
        } 
    }
    return -1
}

console.log(binary_search(3, [1,2,3,4,5]) === 2) // true

console.log(binary_search(35, [13,19,24,29,32,37,43]) === -1) // true

console.log(binary_search(135, [100,120,130,135,150,170]) === 3) // true
