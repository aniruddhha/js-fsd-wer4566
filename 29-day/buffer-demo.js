const { Buffer } = require('node:buffer');

const buf1 = Buffer.alloc(10);
console.log(buf1)

const buf2 = Buffer.alloc(10, 1);
console.log(buf2)

const buf4 = Buffer.from([1, 2, 3]);
console.log(buf4)

const buf6 = Buffer.from('tést');
console.log(buf6)