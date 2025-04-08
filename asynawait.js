/*            Asynce/Await


const fs=require('fs').promises;

const readFile=async ()=>{
    try{

        const data= await fs.readFile('file.txt','utf8')
          console.log (data)

    }catch(err){
        console.error(err);

    }
}
readFile()

*/

//Asynce/Await
const fs=require('fs').promises;

const readFile=async ()=>{
    try{

        const [data,data2]= await Promise.allSettled([
            fs.readFile('file.txt','utf8'),
            fs.readFile('data1.txt','utf8')
        ])

          console.log (data.value)
          console.log(data2)
          console.log (data.status)
          console.log (data2.status)
    }catch(err){
        console.error(err);

    }
}
readFile()