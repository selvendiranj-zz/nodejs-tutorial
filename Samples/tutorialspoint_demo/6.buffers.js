var buffers = module.exports = {};

buffers.getbuffers = function() {

    var output = '\"var buf = new Buffer(256);\" is the syntax to create an uninitiated Buffer of 256 octets ;\n';

    //Creating Buffers
    buf = new Buffer(256);

    //Writing to Buffers
    len = buf.write("Simply Easy Learning");

    output += '\"len = buf.write(\"Simply Easy Learning\");\" is the syntax of the method to write into a Node Buffer and method returns the number of octets written.\n';
    output += "Octets written : " + len + "\n";

    //Reading from Buffers
    buf = new Buffer(26);
    for (var i = 0; i < 26; i++) {
        buf[i] = i + 97;
    }

    output += '\"buf.toString([encoding][, start][, end])\" is the syntax of the method to read data from a Node Buffer and method decodes and returns a string from buffer data encoded using the specified character set encoding.\n';
    output += "In ASCII:" + buf.toString('ascii') + "\n"; // outputs: abcdefghijklmnopqrstuvwxyz
    output += "In ASCII, start point is 0 and end is 5: " + buf.toString('ascii', 0, 5) + "\n"; // outputs: abcde
    output += "In UTF, start point is 0 and end is 5: " + buf.toString('utf8', 0, 5) + "\n"; // outputs: abcde
    output += "In Default which is UTF8, start point is 0 and end is 5: " + buf.toString(undefined, 0, 5) + "\n"; // encoding defaults to 'utf8', outputs abcde

    //Convert Buffer to JSON

    output += '\"var buf = new Buffer(\'Simply Easy Learning\');\" is the syntax to create a Buffer from a given string and optionally encoding type\n';
    var buf = new Buffer('Simply Easy Learning');
    output += '\"var json = buf.toJSON(buf); \"is the syntax of the method to convert a Node Buffer into JSON object and method returns a JSON-representation of the Buffer instance.\n';
    var json = buf.toJSON(buf);
    output += "JSON output :\n" + json + "\n";

    //Concatenate Buffers
    var buffer1 = new Buffer('TutorialsPoint ');
    var buffer2 = new Buffer('Simply Easy Learning');

    output += '\"var buffer3 = Buffer.concat([buffer1, buffer2]); \"is the syntax of the method to concatenate Node buffers to a single Node Buffer and method returns a Buffer instance.\n';
    var buffer3 = Buffer.concat([buffer1, buffer2]);

    output += "buffer3 content: " + buffer3.toString() + "\n";

    //Compare Buffers
    var buffer1 = new Buffer('ABC');
    var buffer2 = new Buffer('ABCD');

    output += '\"var result = buffer1.compare(buffer2);\" is the syntax of the method to compare two Node buffers and returns a number indicating whether it comes before or after or is the same as the otherBuffer in sort order.\n';
    var result = buffer1.compare(buffer2);

    if (result < 0) {
        output += buffer1 + " comes before " + buffer2 + "\n";
    } else if (result == 0) {
        output += buffer1 + " is same as " + buffer2 + "\n";
    } else {
        output += buffer1 + " comes after " + buffer2 + "\n";
    }

    //Copy Buffer
    var buffer1 = new Buffer('ABC');

    //copy a buffer
    var buffer2 = new Buffer(3);

    output += '\"buffer1.copy(buffer2);\" is the syntax of the method to copy a node buffer\n';
    buffer1.copy(buffer2);
    output += "buffer2 content: " + buffer2.toString() + "\n";

    //Slice Buffer
    var buffer1 = new Buffer('TutorialsPoint');

    //slicing a buffer

    output += '\"var buffer2 = buffer1.slice(0, 9);\" s the syntax of the method to get a sub-buffer of a node buffer and Returns a new buffer which references the same memory as the old one, but offset and cropped by the start (defaults to 0) and end (defaults to buffer.length) indexes. Negative indexes start from the end of the buffer.\n';
    var buffer2 = buffer1.slice(0, 9);
    output += "buffer2 content: " + buffer2.toString() + '\n';

    //Buffer Length
    var buffer = new Buffer('TutorialsPoint');

    output += '\"buffer.length\" is the syntax of the method to get a size of a node buffer in bytes and returns the size of a buffer in bytes\n';

    //length of the buffer
    output += "buffer length: " + buffer.length;

    return output;

};