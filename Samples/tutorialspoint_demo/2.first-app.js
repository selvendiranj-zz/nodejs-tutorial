var firstApp = module.exports ={};

var http = require("http");

firstApp.startWithFirstApp = function(){

// Console will print the message
console.log('Server running at http://127.0.0.1:3005/');

return http.createServer(function(request, response) {

    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response body as "Hello World"
    response.end('Welcome to Node Programming \n');
}).listen(3005);

};