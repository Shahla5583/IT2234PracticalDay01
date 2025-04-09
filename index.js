/*const express=require('express');
const app=express();
const port=3001;


const userRoute=require('./user/userroute')

app.use(express.json())
app.use('/user',userRoute)

app.listen (port,()=>{
    console.log(`Server is running on:${port}`)
});




const express = require('express');
const app = express();
const port = 3001;

// Import routes
const userRoute = require('./user/userroute');
const commentRoute = require('./comments/comment_router'); 

app.use(express.json());

// Use the routes
app.use('/user', userRoute);
app.use('/comments', commentRoute); 

app.listen(port, () => {
    console.log(`Server is running on:${port}`);
});



const express = require('express');
const app = express();
const port = 3001;

// Import your comment route correctly
const commentRoute = require('./comment/commentroute');

app.use(express.json());

// Use the comment route at /comments
app.use('/comments', commentRoute);

app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`);
});
*/

const express = require('express');
const app = express();
const port = 3001;

// Import routes
const userRoute = require('./user/userroute');
const commentRoute = require('./comment/commentroute');  // Path corrected here

app.use(express.json());

// Use the routes
app.use('/user', userRoute);
app.use('/comments', commentRoute);  // Path to comment route

app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`);
});
