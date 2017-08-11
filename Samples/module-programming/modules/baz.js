//PATTERN 5: EXPORT A NAMED OBJECT

// baz.js
var Baz = function() {};

Baz.prototype.log = function() {
    console.log('baz!');
};

exports.Baz = new Baz();