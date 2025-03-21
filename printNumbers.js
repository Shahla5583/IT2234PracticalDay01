//write recursive function to print number from 1 to n


function printNumbers(n)
{
	if(n == 0)
	{
		return 1
	}
	else
	{
		printNumbers(n-1)
		console.log(n)
	}	
}

printNumbers(10)