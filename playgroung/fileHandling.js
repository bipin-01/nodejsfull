const fs = require('fs')

// ------------------------creating a new file------------------------
// fs.writeFileSync('read.txt', "Hello welcome to nodeJs programming")

// fs.appendFileSync('read.txt'," I don't want to overwrite the data")

// Node.js includes an additional data type called Buffer 
// (not availabel in browser's Javascript)
// Buffer is mainly used to store binary data, 
// while reading from file or receiving packets over the network

// const buff_data = fs.readFileSync('read.txt');
// const original_data = buff_data.toString();
// console.log(buff_data)
// console.log(original_data)


// to rename the file
// fs.renameSync('readwrite.txt', 'readwritee.txt')



//Creating a directory using fs core module 

// fs.mkdir('./Bipin', { recursive: true}, (err) => {
//     if(err) throw err;
//     console.log(err);
// });


// Making a file inside directory
// fs.writeFileSync('bio.txt', "This is introduction to bio.txt.");
// fs.appendFileSync('bio.txt', " I am adding more data to this bio.txt file");

// fs.renameSync('bio.txt', 'bioo.txt');

fs.unlinkSync('bioo.txt')

fs.writeFileSync("bioo.txt", "This is my new file.")

const rawData = Buffer("bioo.txt")
console.log(rawData)










