function selecSort(input){
    
    var kecil=0
    var tampung=[]
  
    while(input.length > 0){
        for(let i=0;i<input.length;i++){
            if(input[i]> kecil){
                kecil = input[i]
            }
            for(let i=0;i<input.length;i++){
                if(input[i] < kecil){
                    kecil = input[i]
                }           
               
            }           
        }
        tampung.push(kecil)
        var index = input.indexOf(kecil);
        input.splice(index, 1);
    }
  
    return tampung

}
console.log(selecSort([33,2,52,106,73]))    