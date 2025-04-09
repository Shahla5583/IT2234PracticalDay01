

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
