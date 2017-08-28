var pathModules = module.exports={};

pathModules.getPathModules = function(){

var output ='';

var path = require("path");

// Normalization
output ='normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..');

// Join
output += '\njoint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..');

// Resolve
output += '\nresolve : ' + path.resolve('main.js');

// extName
output += '\next name : ' + path.extname('main.js');

return output;
};