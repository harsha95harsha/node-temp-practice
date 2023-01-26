const path = require('path');


console.log(path.sep);

console.log(path.dirname);
const filePath = path.join('/content/', 'subcontent', 'test.txt');
console.log(filePath);
const base = path.basename(filePath);
console.log(base)

const absolute = path.resolve();
console.log(absolute);
