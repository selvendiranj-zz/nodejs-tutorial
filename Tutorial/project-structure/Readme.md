# Project Structure Tutorial

### The 5 fundamental rules of a Node.js Project Structure

### Rule 1 - Organize your Files Around Features, Not Roles
```
// DON'T
.
├── controllers
|   ├── product.js
|   └── user.js
├── models
|   ├── product.js
|   └── user.js
├── views
|   ├── product.hbs
|   └── user.hbs
```
```
// DO
.
├── product
|   ├── index.js
|   ├── product.js
|   └── product.hbs
├── user
|   ├── index.js
|   ├── user.js
|   └── user.hbs
```

### Rule 2 - Don't Put Logic in index.js Files
```javascript
// product/index.js
var product = require('./product')

module.exports = {  
  create: product.create
}
```

### Rule 3 - Place Your Test Files Next to The Implementation
```
.
├── test
|   └── setup.spec.js
├── product
|   ├── index.js
|   ├── product.js
|   ├── product.spec.js
|   └── product.hbs
├── user
|   ├── index.js
|   ├── user.js
|   ├── user.spec.js
|   └── user.hbs
```

### Use a config Directory
```
.
├── config
|   ├── index.js
|   └── server.js
├── product
|   ├── index.js
|   ├── product.js
|   ├── product.spec.js
|   └── product.hbs
```

### Rule 5 - Put Your Long npm Scripts in a scripts Directory
```
.
├── scripts
|   ├── syncDb.sh
|   └── provision.sh
├── product
|   ├── index.js
|   ├── product.js
|   ├── product.spec.js
|   └── product.hbs
```