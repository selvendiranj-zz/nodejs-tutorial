var fileSystems = module.exports = {};

fileSystems.getFileSystem = function() {

    //Synchronous vs Asynchronous
    var fs = require("fs");
    var output = '';

    // Asynchronous read
    fs.readFile('input2.txt', function(err, data) {
        if (err) {
            output = err + '\n';
            return output;
        }
        output = "Asynchronous read: " + data.toString() + '\n';
    });

    // Synchronous read
    var data = fs.readFileSync('input2.txt');
    output += "Synchronous read: " + data.toString() + '\n';

    output += "Program Ended\n";

    //Open a File
    var fs = require("fs");

    // Asynchronous - Opening File
    console.log("Going to open file!");
    fs.open('input2.txt', 'r+', function(err, fd) {
        if (err) {
            output += err + '\n';
            return output;
        }
        output += "File opened successfully!\n";
    });

    //Get File Information
    var fs = require("fs");

    output += "Going to get file info!\n";
    fs.stat('input2.txt', function(err, stats) {
        if (err) {
            output += err + '\n';
            return output;
        }
        output += stats + '\n';
        output += "Got file info successfully!\n";

        // Check file type
        output += "isFile ? " + stats.isFile() + '\n';
        output += "isDirectory ? " + stats.isDirectory() + '\n';
    });

    //Writing a File
    var fs = require("fs");

    output += "Going to write into existing file\n";
    fs.writeFile('input2.txt', 'Simply Easy Learning!', function(err) {
        if (err) {
            output += err + '\n';
            return output;
        }

        console.log("Data written successfully!");
        console.log("Let's read newly written data");
        fs.readFile('input2.txt', function(err, data) {
            if (err) {
                output += err + '\n';
                return output;
            }
            output += "Asynchronous read: " + data.toString();
        });
    });

    //Reading a File
    var fs = require("fs");
    var buf = new Buffer(1024);

    output += "\nGoing to open an existing file";
    fs.open('input2.txt', 'r+', function(err, fd) {
        if (err) {
            output += err + '\n';
            return output;
        }
        output += "\nFile opened successfully!";
        output += "Going to read the file\n";
        fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
            if (err) {
                output += err + '\n';
                return output;
            }
            output += bytes + " bytes read\n";

            // Print only read bytes to avoid junk.
            if (bytes > 0) {
                output += buf.slice(0, bytes).toString() + '\n';
            }
        });
    });

    //Closing a File
    var fs = require("fs");
    var buf = new Buffer(1024);

    console.log("Going to open an existing file");
    fs.open('input2.txt', 'r+', function(err, fd) {
        if (err) {
            output += err + '\n';
            return output;
        }
        output += "File opened successfully!\n";
        output += "Going to read the file\n";

        fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
            if (err) {
                output += err + '\n';
                return output;
            }

            // Print only read bytes to avoid junk.
            if (bytes > 0) {
                output += buf.slice(0, bytes).toString() + '\n';
            }

            // Close the opened file.
            fs.close(fd, function(err) {
                if (err) {
                    output += err + '\n';
                    return output;
                }
                output += "File closed successfully.\n";
            });
        });
    });

    //Truncate a File
    var fs = require("fs");
    var buf = new Buffer(1024);

    output += "Going to open an existing file\n";
    fs.open('input2.txt', 'r+', function(err, fd) {
        if (err) {
            output += err + '\n';
            return output;
        }
        output += "File opened successfully!\n";
        output += "Going to truncate the file after 10 bytes\n";

        // Truncate the opened file.
        fs.ftruncate(fd, 10, function(err) {
            if (err) {
                output += err + '\n';
                return output;
            }
            output += "File truncated successfully.\n";
            output += "Going to read the same file\n";

            fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
                if (err) {
                    output += err + '\n';
                    return output;
                }

                // Print only read bytes to avoid junk.
                if (bytes > 0) {
                    output += buf.slice(0, bytes).toString() + '\n';
                }

                // Close the opened file.
                fs.close(fd, function(err) {
                    if (err) {
                        output += err + '\n';
                    }
                    output += "File closed successfully.\n";
                });
            });
        });
    });

    //Delete a File
    var fs = require("fs");

    console.log("Going to delete an existing file");
    fs.unlink('input.txt', function(err) {
        if (err) {
            output += err + '\n';
            return output;
        }
        output += "File deleted successfully!\n";
    });

    //Create a Directory
    var fs = require("fs");

    output += "Going to create directory /tmp/test\n";
    fs.mkdir('/tmp/test', function(err) {
        if (err) {
            output += err + '\n';
            return output;
        }
        output += "Directory created successfully!\n";
    });

    //Read a Directory
    var fs = require("fs");

    output += "Going to read directory /tmp\n";
    fs.readdir("/tmp/", function(err, files) {
        if (err) {
            output += err + '\n';
            return output;
        }
        files.forEach(function(file) {
            output += file = '\n';
        });
    });

    //Remove a Directory
    var fs = require("fs");

    output += "Going to delete directory /tmp/test\n";
    fs.rmdir("/tmp/test", function(err) {
        if (err) {
            output += err + '\n';
            return output;
        }
        output += "Going to read directory /tmp\n";

        fs.readdir("/tmp/", function(err, files) {
            if (err) {
                output += err + '\n';
                return output;
            }
            files.forEach(function(file) {
                output += file + '\n';
            });
        });
    });

    return output;
};