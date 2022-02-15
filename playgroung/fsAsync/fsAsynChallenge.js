// Challange Time

// 1: Create a folder and name it Your surname
// 2: Create a file in it name bio.txt and store data into it
// 3: Add more data into the file at the end of the existing data.
// 4: Read the data without getting the buffer data at first.
// file encoding
// 5: Rename the file name to mybio.txt
// 6: now delete both the file and the folder

const fs = require("fs");
// 1: Create a folder and name it Your surname
// fs.mkdir("Poudel", (err) => {
//   if (err) throw err;
// });

// 2: Create a file in it name bio.txt and store data into it
// fs.writeFile(
//   "./Poudel/bio.txt","utf8", (err, res) =>{
//       if(err) throw err;
//       else console.log(res)
//       }

// );


// 3: Add more data into the file at the end of the existing data

// fs.appendFile(
//   "./Poudel/bio.txt",
//   "I think I am in good shape about the concept now about node js file system handling",
//   (err) => {
//     if (err) throw err;
//     else{
//         console.log("Append action succesful")
//     }
//   }
// );

// 4:Read the data without getting the buffer data at first.
// fs.readFile("./Poudel/bio.txt", "utf-8", (err, res) => {
//     if(err) throw err;
//     else console.log(res)
// });

// 5: Rename the file name to mybio.txt
// fs.rename("./Poudel/bio.txt", "./Poudel/mybio.txt", (err, res) => {
//     if(err) throw err;
//     else {
//         console.log(res)                       // will produce undefined, as it return no res data
//     }
// })

// // 6: now delete both the file and the folder

// fs.rm("./Poudel", {recursive: true}, (err, res) => {
//     if(err) throw err;
//     else console.log(res)
// })
