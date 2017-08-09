var express = require('express');
var app = express();
var fs = require("fs");

//http://127.0.0.1:8081/2
app.get('/:id', function(req, res) {
    // First read existing users.
    fs.readFile(__dirname + "/db/" + "users.json", 'utf8', function(err, data) {
        var users = JSON.parse(data);
        var user = users["user" + req.params.id]
        console.log(user);
        res.end(JSON.stringify(user));
    });
})

var server = app.listen(8081, function() {

    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)

})