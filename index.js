
const server = require('./server');
const http = require('http').createServer(server);
const path = require('path'); 
const PORT = 3000;
http.listen((PORT), (error) => {
    if (error) return console.log(error) 
    console.log(`Server started on port ${PORT}`);
});