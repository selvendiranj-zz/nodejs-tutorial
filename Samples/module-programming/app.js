//DON'T POLLUTE THE GLOBAL SPACE
// hello.js
require('./modules/hello.js');

// foo.js
require('./modules/foo.js');
foo();


//MODULE PROGRAMMING
// bar.js
var bar = require('./modules/bar.js');
bar();

// fiz.js
var fiz = require('./modules/fiz.js').fiz;
fiz();

// buz.js
var buz = require('./modules/buz.js');
buz.log();

// baz.js
var baz = require('./modules/baz.js').Baz;
baz.log();

// doo.js
var Doo = require('./modules/doo.js');
var doo = new Doo();
doo.log();

// qux.js
var Qux = require('./modules/qux.js').Qux;
var qux = new Qux();
qux.log();

//
var parserProto = require('funky-parser');
var parserObj = parserProto({ foo: 'bar' });
console.log(parser.foo)