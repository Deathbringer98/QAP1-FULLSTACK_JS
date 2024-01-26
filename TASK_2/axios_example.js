// axios_example.js
const axios = require('axios'); // Include the axios package

// Make a GET request to the JSONPlaceholder API
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    // The request was successful, log the response to the console
    console.log(response.data);
  })
  .catch(error => {
    // The request failed, log the error to the console
    console.log(error);
  });