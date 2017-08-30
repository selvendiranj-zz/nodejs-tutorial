var streamsEx = module.exports = {};

streamsEx.getStreams = function() {

    //Reading from a Stream
    var fs = require("fs");
    var data = '';
    var output = '';

    output += '\"var readerStream = fs.createReadStream(\'input.txt\');\" is used to create a readable stream\n';
    // Create a readable stream
    var readerStream = fs.createReadStream('input.txt');

    output += '\"readerStream.setEncoding(\'UTF8\');\" Set the encoding to be utf8.\n';
    // Set the encoding to be utf8. 
    readerStream.setEncoding('UTF8');

    // Handle stream events --> data, end, and error
    readerStream.on('data', function(chunk) {
        data += chunk;
    });

    readerStream.on('end', function() {
        output += data + "\n";
    });

    readerStream.on('error', function(err) {
        output += err.stack + "\n";
    });

    output += "Program Ended\n";

    //Writing to a Stream
    var fs = require("fs");
    var data = 'Simply Easy Learning';

    output += '\"var writerStream = fs.createWriteStream(\'output.txt\');\" - Create a writable stream\n';
    // Create a writable stream
    var writerStream = fs.createWriteStream('output.txt');

    output += '\"writerStream.write(data, \'UTF8\');\" - Write the data to stream with encoding to be utf8\n';
    // Write the data to stream with encoding to be utf8
    writerStream.write(data, 'UTF8');

    // Mark the end of file
    writerStream.end();

    // Handle stream events --> finish, and error
    writerStream.on('finish', function() {
        output += "Write completed.\n";
    });

    writerStream.on('error', function(err) {
        output += err.stack + "\n";
    });

    output += "Program Ended\n";

    //Piping the Streams
    var fs = require("fs");

    // Create a readable stream
    var readerStream = fs.createReadStream('input.txt');

    // Create a writable stream
    var writerStream = fs.createWriteStream('output.txt');

    output += '\"readerStream.pipe(writerStream); - Pipe the read and write operations and read input.txt and write data to output.txt\n"';
    // Pipe the read and write operations
    // read input.txt and write data to output.txt
    readerStream.pipe(writerStream);

    output += "Program Ended\n";

    //Chaining the Streams
    var fs = require("fs");
    var zlib = require('zlib');

    output += '\"fs.createReadStream(\'input.txt\').pipe(zlib.createGzip()).pipe(fs.createWriteStream(\'input.txt.gz\'));\" -';
    output += 'Compress the file input.txt to input.txt.gz\n';

    // Compress the file input.txt to input.txt.gz
    fs.createReadStream('input.txt')
        .pipe(zlib.createGzip())
        .pipe(fs.createWriteStream('input.txt.gz'));

    output += "File Compressed.\n";

    var fs = require("fs");
    var zlib = require('zlib');

    output += '\"fs.createReadStream(\'input.txt.gz\').pipe(zlib.createGunzip()).pipe(fs.createWriteStream(\'input.txt\'));\" -';
    output += 'Decompress the file input.txt.gz to input.txt\n';

    // Decompress the file input.txt.gz to input.txt
    fs.createReadStream('input.txt.gz')
        .pipe(zlib.createGunzip())
        .pipe(fs.createWriteStream('input.txt'));

    output += "File Decompressed.\n";

    return output;
};