//Rest parameter 
const mysum= (...n)=>{                               //...any nnumber of parameter,not only 2 numbers
console.log(n)

}

mysum(4,5,6,89,56)

/*
let Sum=0
const addNumbers=(...n)=>{
	return (
            for(let i=0;i<n.length;i++)
            {
	          return sum+n
            }

})
console.log(addNumbers(4,5,8,4,9))
*/

//sum of n numbers
const mySum=(...n)=>{
	return n.reduce((t,i)=>t=t+i )
}	//reduce is default.reduce the array to single value,reduce return the t
	console.log(mySum(4,5,6,7,8))
	