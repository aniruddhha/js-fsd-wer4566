const stream = require('node:stream'); 
const fs = require('node:fs')

let st = fs.createWriteStream('abc.txt')
st.write('Hey Hi How are')

