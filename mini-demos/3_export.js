let user = require('./Users');
let path = require('path');
const { isAbsolute } = require('path');

let u1 = new user('Rastko', 23);
console.log(u1.descriptor);
console.log(u1.descriptor());

let obj = path.parse(__filename);
console.log(obj);
let newPath = path.join(obj.dir, 'foo', 'bar', '2');
console.log(newPath);
console.log(isAbsolute(newPath))