//write a boolean function to find a given number is prime

let num=8;
let count=0;

function bool(){
	
	if(num < 2) 
	return false; 
	
	for(let i=2;i<=num;i++)
	{
		if(num%i==0)
		{
			count++;
		
		}

	}
	
	if(count==2)
	{
	//console.log("this is prime number")
	return true
	
	}
    else
	{
			
	//console.log("This is not a prime number")
	return false
    }
}
console.log(bool())
	
