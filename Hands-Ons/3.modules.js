const http = require('http');
var dt = require('./modules/date-module');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write("The date and time is currently: " + dt.myDateTime());
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});