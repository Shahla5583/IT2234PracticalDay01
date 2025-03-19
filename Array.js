//declare a Array
let numArrays =[1,4,5,3]

console.log(numArrays);

console.log("print each element in array using index:")
console.log(numArrays[0])
console.log(numArrays[1])
console.log(numArrays[2])
console.log(numArrays[3])


console.log("Print each element using loop:")
for(let i=0;i<=3;i++)
{
	console.log(numArrays[i])
}



// print  each element using foreach
console.log("Print each element using foreach loop:")

numArrays.forEach((n)=>{
	
	console.log(n)
})

