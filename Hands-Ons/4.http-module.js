// NodeJS a web server

// refer the http module
var http = require('http');
//refer the url module
var url = require('url');

// create a server object:
http.createServer(function(req, res) {
    // add a HTTP header with return contentType html:
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // write a response to the client
    res.write('<br/>Hello World!');

    // Read the Query String
    res.write('<br/>The url requested by the client is \n' + req.url);

    // Split the Query String /?year=2017&month=July
    var query = url.parse(req.url, true).query;
    var txt = query.year + " " + query.month;
    res.write('<br/>' + 'Year: ' + query.year + ' Month:' + query.month);

    // end the response
    res.end();
}).listen(8080); // the server object listens on port 8080