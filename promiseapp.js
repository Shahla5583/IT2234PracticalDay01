
const fs = require('fs').promises;

const readFile = (filepath) => {
    return fs.readFile(filepath, 'utf8'); // Use the passed filepath argument
};

readFile('file.txt') // Call the function with the correct name and argument
    .then((data) => {
        console.log(data); // Log the file content
    })
    .catch((err) => {
        console.error(err); // Catch and log any errors
    });
