var webModules = module.exports={};

webModules.getWebModules = function(){

 console.log("Inside Web Modules");   

//Node as a server
var http = require('http');
var fs = require('fs');
var url = require('url');

// Create a server
http.createServer(function(request, response) {
    // Parse the request containing file name
    var pathname = url.parse(request.url).pathname;

    // Print the name of the file for which request is made.
    console.log("Request for " + pathname + " received.");

    // Read the requested file content from file system
    fs.readFile(pathname.substr(1), function(err, data) {
        if (err) {
            console.log(err);
            // HTTP Status: 404 : NOT FOUND
            // Content Type: text/plain
            response.writeHead(404, { 'Content-Type': 'text/html' });
        } else {
            //Page found	  
            // HTTP Status: 200 : OK
            // Content Type: text/plain
            response.writeHead(200, { 'Content-Type': 'text/html' });

            // Write the content of the file to response body
            response.write(data.toString());
        }
        // Send the response body 
        response.end();
    });
}).listen(3005);

// Console will print the message
console.log('Server running at http://127.0.0.1:3005/');

//Node as a Client
var http = require('http');

// Options to be used by request 
var options = {
    host: 'localhost',
    port: '3005',
    path: '/main.html'
};

// Callback function is used to deal with response
var callback = function(response) {
        // Continuously update stream with data
        var body = '';
        response.on('data', function(data) {
            body += data;
        });

        response.on('end', function() {
            // Data received completely.
            console.log(body);
        });
    }
    // Make a request to the server
var req = http.request(options, callback);
req.end();

console.log("End of Web Modules");
};