//PATTERN 6: EXPORT AN ANONYMOUS PROTOTYPE

// doo.js
var Doo = function() {};

Doo.prototype.log = function() {
    console.log('doo!');
}

module.exports = Doo;