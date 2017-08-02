var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    var fileName = './views/file-system.html';
    readFile(fileName, res);
    // fs.createReadStream(fileName).pipe(res);
    //createFile('./contents/file-content1.txt', res);
    //updateFile('./contents/file-content3.txt', res);
    //deleteFile('./contents/file-content3.txt', res);
    //renameFile('./contents/file-content4.txt', 'file-content4.txt', res);

    //res.end();

}).listen(8080);


function readFile(fileName, res) {
    fs.readFile(fileName, function(err, data) {
        if (err) throw err;
        console.log('Read File');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
}

function createFile(fileName, res) {
    fs.appendFile(fileName, content, function(err) {
        if (err) throw err;
        console.log('Save');
    });

    fs.open(fileName, 'w', function(err, file) {
        if (err) throw err;
        console.log('Open');
    });

    fs.writeFile(fileName, 'Hello content!', function(err) {
        if (err) throw err;
        console.log('Write!');
    });

    res.end();
}

function updateFile(fileName, res) {
    fs.appendFile(fileName, ' This is my text.', function(err) {
        if (err) throw err;
        console.log('Updated!');
    });

    fs.writeFile(fileName, 'This is my text', function(err) {
        if (err) throw err;
        console.log('Replaced!');
    });

    res.end();
}

function deleteFile(fileName, res) {
    fs.unlink(fileName, function(err) {
        if (err) throw err;
        console.log('File deleted!');
    });

    res.end();
}

function renameFile(fileName, newFileName, res) {
    fs.rename(fileName, newFileName, function(err) {
        if (err) throw err;
        console.log('File Renamed!');
    });

    res.end();
}