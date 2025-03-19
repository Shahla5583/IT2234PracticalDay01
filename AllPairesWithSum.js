//arr=[1,2,3,4,5,6]
//target=7
//write a code find the all paires that sum up to the target
	
	let arr=[1,2,3,4,5,6]
	let target=7;
	

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) { // j starts from i+1 to avoid duplicate pairs
        if (arr[i] + arr[j] ==target) {
            console.log(arr[i],arr[j]);
        }
    }
}
