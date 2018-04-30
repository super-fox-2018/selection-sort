let sortSelection =  function(arr) {
	// body...
	

	for(var i=0;i<arr.length;i++){
		var min = i;
		for(var j=i+1;j<arr.length;j++){
			if (arr[j]<arr[min]) {
				min=j
			}
			console.log(arr);
		}
		var temp = arr[i]
		arr[i]=arr[min]
		arr[min]=temp

	}
	return arr
}

console.log(sortSelection([3,124,512,5,353,6363,41]));