const fs = require('fs');
const child_process = require('child_process');

//The exec() method
for (var i = 0; i < 3; i++) {
    var workerProcess = child_process.exec('node process/support.js ' + i, function(error, stdout, stderr) {

        if (error) {
            console.log(error.stack);
            console.log('Error code: ' + error.code);
            console.log('Signal received: ' + error.signal);
        }
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
    });

    workerProcess.on('exit', function(code) {
        console.log('Child process exited with exit code ' + code);
    });
}

//The spawn() Method
for (var i = 0; i < 3; i++) {
    var workerProcess = child_process.spawn('node', ['process/support.js', i]);

    workerProcess.stdout.on('data', function(data) {
        console.log('stdout: ' + data);
    });

    workerProcess.stderr.on('data', function(data) {
        console.log('stderr: ' + data);
    });

    workerProcess.on('close', function(code) {
        console.log('child process exited with code ' + code);
    });
}

//The fork() Method
for (var i = 0; i < 3; i++) {
    var worker_process = child_process.fork("process/support.js", [i]);

    worker_process.on('close', function(code) {
        console.log('child process exited with code ' + code);
    });
}