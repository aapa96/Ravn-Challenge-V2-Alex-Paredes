const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const server = express();
const router = express.Router();
server.set('view engine', 'html');
server.use(express.static(__dirname + '/web/build', { index: false }));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(morgan('dev'));
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization,X-API-KEY,Origin,X-Requested-With,Content-Type,Accept,Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT , DELETE');
    res.header('Allow', 'GET,POST,OPTIONS,PUT,DELETE');
    next();
})
// server.use('/v1/api', routes);

server.use('*', router.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname + '/web/build/index.html'));
}));

module.exports = server;