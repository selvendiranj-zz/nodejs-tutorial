var express = require('express');
var app = express();
var ejs = require('ejs');

var document = typeof document === 'undefined' ? '' : document;

//importing modules 

var home = require("./1.Home.js");


app.get('/',function(req,res){
    
    res.sendFile(__dirname+"/main.html");
});

app.get('/home',function(req,res){
  

    var homeOutput = home.sayHelloWorld();

    var outputHTML = ejs.render(homeOutput, {temp: homeOutput});  //get redered HTML code
     res.sendFile(__dirname+"/outputHTML.html");
    
    res.end(outputHTML);
     
  
  ;
});


var port = 3004;

app.listen(port,function(){
    console.log("Server is Listening at "+port);
});
