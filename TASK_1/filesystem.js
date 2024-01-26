// filesystem.js
const fs = require('fs'); // Include the filesystem module

// Write to a new file named myfile.txt
// fs.writeFile() method replaces the specified file and content.
fs.writeFile('myfile.txt', 'Hello content!', function (err) {
    if (err) throw err; // If an error occurred, throw an exception.
    console.log('Saved!'); // Log the message 'Saved!' to the console if the file was successfully written.
});

// Read the created file
// fs.readFile() method reads the contents of the file.
fs.readFile('myfile.txt', 'utf8', function(err, data) {
    if (err) throw err; // If an error occurred, throw an exception.
    console.log(data); // Log the content of the file to the console.
});