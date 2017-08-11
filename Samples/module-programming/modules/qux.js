//PATTERN 7: EXPORT A NAMED PROTOTYPE

// qux.js
var Qux = function() {};

Qux.prototype.log = function() {
    console.log('baz!');
};

exports.Qux = Qux;