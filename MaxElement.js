//find the max number in the array

let numArrays =[1,4,5,3]

let max=0;
numArrays.forEach((n)=>{
	
	/*   if(max<n)
	    {
	      max=n
	    }
    */
	
	//(max<n)?max=n:n=n
	(max<n) && (max=n)
	
	})
console.log("Max  is :" +max)
	
	
	