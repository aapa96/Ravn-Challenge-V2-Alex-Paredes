
const server = require('./server');
const http = require('http').createServer(server);
const path = require('path');
const PORT = 3000;
server.listen(3000, (error) => {
    if (error) return console.log(error)
});