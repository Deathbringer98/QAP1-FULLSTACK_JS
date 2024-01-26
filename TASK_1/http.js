// http.js
const http = require('http'); // Include the http module

// Create a server object
// http.createServer() method turns your computer into an HTTP server. 
// req is the request from the client, as an HTTP (incoming message) object.
// res is the response from the server, as an HTTP (server response) object.
http.createServer((req, res) => {
    // Write a response
    // res.write() method sends a chunk of the response body.
    res.write('Hello World!');
    // res.end() method signals to the server that all of the response headers and body have been sent.
    res.end(); 
}).listen(8080); // The server object listens on port 8080

console.log('Server is running on http://localhost:8080');