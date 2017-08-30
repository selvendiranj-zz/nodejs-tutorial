var express = require('express');
var app = express();
var ejs = require('ejs');
var openurl = require("openurl");
var outputHTML;
var output;

// var document = typeof document === 'undefined' ? '' : document;

var port = 3004;

//importing modules 

var home = require("./1.Home.js");
var firstApp = require("./2.first-app.js");
var callbacks = require("./3.callbacks.js");
var eventLoops = require("./4.event-loop.js");
var eventEmmiter = require("./5.event-emitter.js");
var buffers = require("./6.buffers.js");
var streams = require('./7.streams.js');
var fileSystem = require('./8.file-system.js');
var globalObjects = require('./9.global-objects.js');
var osModules = require('./10.os-module.js');
var pathModules = require('./11.path-module.js');
var netModules = require('./12.net-module.js');
var dnsModules = require('./13.dns-module');
var domainModules = require('./14.domain-module.js');
var webModules = require('./15.web-module.js');
var childProcess = require('./16.child_process-module.js');

app.get('/', function(req, res) {

    res.sendFile(__dirname + "/main.html");
});

app.get('/home', function(req, res) {

    output = home.sayHelloWorld();

    outputHTML = renderHtml(output);
    res.sendFile(__dirname + "/outputHTML.html");

    res.end(outputHTML);

});

app.get('/firstApp', function(req, res) {

    output = firstApp.startWithFirstApp();

    openurl.open('http://127.0.0.1:3005/');
    res.sendFile(__dirname + "/main.html");

});

app.get('/callbacks', function(req, res) {

    output = callbacks.readFileData();

    outputHTML = renderHtml(output);
    res.sendFile(__dirname + "/outputHTML.html");

    res.end(outputHTML);

});

app.get('/eventLoops', function(req, res) {

    output = eventLoops.getEventLoops();

    outputHTML = renderHtml(output);
    res.sendFile(__dirname + "/outputHTML.html");

    res.end(outputHTML);

});

app.get('/eventEmmiter', function(req, res) {

    output = eventEmmiter.getEventEmitter();

    outputHTML = renderHtml(output);
    res.sendFile(__dirname + "/outputHTML.html");

    res.end(outputHTML);

});

app.get('/buffers', function(req, res) {

    output = buffers.getbuffers();

    outputHTML = renderHtml(output);
    res.sendFile(__dirname + "/outputHTML.html");

    res.end(outputHTML);

});

app.get('/streams', function(req, res) {

    output = streams.getStreams();

    outputHTML = renderHtml(output);
    res.sendFile(__dirname + "/outputHTML.html");

    res.end(outputHTML);

});

app.get('/fileSystem', function(req, res) {

    output = fileSystem.getFileSystem();

    outputHTML = renderHtml(output);
    res.sendFile(__dirname + "/outputHTML.html");

    res.end(outputHTML);

});

app.get('/globalObjects', function(req, res) {

    output = globalObjects.getGlobalObjects();

    outputHTML = renderHtml(output);
    res.sendFile(__dirname + "/outputHTML.html");

    res.end(outputHTML);

});

app.get('/osModules', function(req, res) {

    output = osModules.getOsModules();

    outputHTML = renderHtml(output);
    res.sendFile(__dirname + "/outputHTML.html");

    res.end(outputHTML);

});

app.get('/pathModules', function(req, res) {

    output = pathModules.getPathModules();

    outputHTML = renderHtml(output);
    res.sendFile(__dirname + "/outputHTML.html");

    res.end(outputHTML);

});

app.get('/netModules', function(req, res) {

    netModules.getNetModules();
    res.sendFile(__dirname + "/main.html");

});

app.get('/dnsModules', function(req, res) {

    dnsModules.getDnsModules();

    res.sendFile(__dirname + "/main.html");


});

app.get('/domainModules', function(req, res) {

    output = domainModules.getDomainModules();

    outputHTML = renderHtml(output);
    res.sendFile(__dirname + "/outputHTML.html");

    res.end(outputHTML);

});

app.get('/webModules', function(req, res) {

    webModules.getWebModules();

    openurl.open('http://127.0.0.1:3005/');
    res.sendFile(__dirname + "/main.html");

    res.end(outputHTML);

});

app.get('/childProcess', function(req, res) {

    output = childProcess.getChildProcess();

    outputHTML = renderHtml(output);
    res.sendFile(__dirname + "/outputHTML.html");

    res.end(outputHTML);

});

var renderHtml = function(output) {

    outputHTML = ejs.render(output, { temp: output }); //get redered HTML code

    return outputHTML;
};

app.listen(port, function() {
    console.log("Server is Listening at " + port);
});