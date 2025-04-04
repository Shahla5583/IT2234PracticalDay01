

const fs = require('fs');
fs.readFile('file.txt', 'utf8', (err, data) => { // Change 'date' to 'data'
    if (err) {
        console.error(err);
        return 0;
    }
    console.log(data); // Now it matches the variable name 'data'
});

console.log("File reading is done..");
