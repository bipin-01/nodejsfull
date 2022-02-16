const fs = require("fs");

// fs.writeFile("read.txt", "Today is an awesomeday", (err) => {
//   console.log("files is created");
//   console.log(err);
// });

// fs.appendFile("read.txt", ". I'm going too learn something new today", (err) => {
//     console.log("task completed");
// });


// with this we will obtain back the buffer data/res
// fs.readFile('read.txt', (err, res) => {
//     console.log(res);
// });

//we can get utf8 to get the original data/res as the data are encoded

// fs.readFile('read.txt', 'utf8', (err, res) => {
//     console.log(res)
// })

//lets try with toString method 

const buff_data = fs.readFile('read.txt', "UTF-8", (err, res) => {
    console.log(res)
})

// console.log(buff_data)        



