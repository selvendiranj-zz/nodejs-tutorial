# NODE.JS MODULE PATTERNS USING SIMPLE EXAMPLES
```Darren DeRidder / @73rhodes```

### MODULES FOR N00BS
* Node.JS - a Common.JS Module Implementation
* Your code uses require to include modules.
* Modules use exports to make things available.

### COMMON.JS
* An ecosystem for JavaScript outside the browser
* Modules
* Promises
* Binary
* Filesystem
* Console
* System
* Testing

### PROS AND CONS
* Named exports - one module, many exported things
* Anonymous exports - simpler client interface

### module.exports VS exports
* exports is an alias to module.exports.
* node automatically creates it as a convenient shortcut.
* For assigning named properties, use either one.
```javascript
> module.exports.fiz = "fiz";
> exports.buz = "buz";
> module.exports === exports;
true
```

### WARNING
* Assigning anything to exports directly (instead of exports.something) will overwrite the exports alias.
```javascript
> module.exports.qux = "qux";
> exports
{ qux: "qux" }
> exports === module.exports
true
> exports = "wobble wibble wubble!";
> exports === module.exports
false
> exports
"wobble wibble wubble!"
> module.exports
{ qux: "qux" }
// module.exports is canonical
```