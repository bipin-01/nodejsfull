const fs = require('fs')

// ------------------------creating a new file------------------------
// fs.writeFileSync('read.txt', "Hello welcome to nodeJs programming")

fs.appendFileSync('read.txt'," I don't want to overwrite the data")

// Node.js includes an additional data type called Buffer 
// (not availabel in browser's Javascript)
// Buffer is mainly used to store binary data, 
// while reading from file or receiving packets over the network


const buff_data = fs.readFileSync('read.txt');
const true_data = buff_data.toString();
console.log(buff_data)
console.log(true_data)

