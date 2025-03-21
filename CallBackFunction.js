//callback function
// a function passed as an argument
	
	
	const greet=(msg,fun)=>{
		console.log("Hi.."+msg)
		fun()
		
	}

	greet("Good morning",()=>console.log("my name is Shahla"))
	
	
const multtwo=(n)=>n*2

const myarr=(mul,...n)=>{
	n.forEach((i)=>console.log(mul(i)))
}
myarr(multtwo,4,5,6,8,2)