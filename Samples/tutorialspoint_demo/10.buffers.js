//Creating Buffers
buf = new Buffer(256);

//Writing to Buffers
len = buf.write("Simply Easy Learning");

console.log("Octets written : " + len);

//Reading from Buffers
buf = new Buffer(26);
for (var i = 0; i < 26; i++) {
    buf[i] = i + 97;
}

console.log(buf.toString('ascii')); // outputs: abcdefghijklmnopqrstuvwxyz
console.log(buf.toString('ascii', 0, 5)); // outputs: abcde
console.log(buf.toString('utf8', 0, 5)); // outputs: abcde
console.log(buf.toString(undefined, 0, 5)); // encoding defaults to 'utf8', outputs abcde

//Convert Buffer to JSON
var buf = new Buffer('Simply Easy Learning');
var json = buf.toJSON(buf);

console.log(json);

//Concatenate Buffers
var buffer1 = new Buffer('TutorialsPoint ');
var buffer2 = new Buffer('Simply Easy Learning');
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log("buffer3 content: " + buffer3.toString());

//Compare Buffers
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if (result < 0) {
    console.log(buffer1 + " comes before " + buffer2);
} else if (result == 0) {
    console.log(buffer1 + " is same as " + buffer2);
} else {
    console.log(buffer1 + " comes after " + buffer2);
}

//Copy Buffer
var buffer1 = new Buffer('ABC');

//copy a buffer
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());

//Slice Buffer
var buffer1 = new Buffer('TutorialsPoint');

//slicing a buffer
var buffer2 = buffer1.slice(0, 9);
console.log("buffer2 content: " + buffer2.toString());

//Buffer Length
var buffer = new Buffer('TutorialsPoint');

//length of the buffer
console.log("buffer length: " + buffer.length);