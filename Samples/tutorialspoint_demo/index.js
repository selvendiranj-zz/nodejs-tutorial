var http = require('http');

var hostname = '127.0.0.1';
var port = 8080;

function listeningListener() {
    console.log('Server running at http://' + hostname + ': ' + port + '/');
}

function requestListener(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
}

server.listen(port, hostname, listeningListener);
var server = http.createServer(requestListener);