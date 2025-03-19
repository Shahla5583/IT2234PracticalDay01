//[4,8,3,4,3,2,1,8,4]
//find the most frequent element in the array
	 
	function findMostFrequent(arr) {
    let freqMap = {};
    let maxCount = 0;
    let mostFrequent;

    // Count occurrences using a regular for loop
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        freqMap[num] = (freqMap[num] || 0) + 1;

        if (freqMap[num] > maxCount) {
            maxCount = freqMap[num];
            mostFrequent = num;
        }
    }

    return mostFrequent;
}

let arr = [4, 8, 3, 4, 3, 2, 1, 8, 4];
console.log(findMostFrequent(arr)); 

	 
	
	
	 