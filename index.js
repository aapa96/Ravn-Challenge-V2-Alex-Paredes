
const server = require('./server');
const http = require('http').createServer(server);
const path = require('path');
server.listen(process.env.PORT || 3000, (error) => {
    if (error) return console.log(error)
});