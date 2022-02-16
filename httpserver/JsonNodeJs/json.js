// 1: creat an javascript object nama bioData and pass it {name, age, channel} name: value, pairs 
// 2: convert the js object to json data
// 3: create a new file through fs module and add the jsonData to the new created file
// 4: use the fs module to read the data from the newly created .json file
// 5: convert back the json data to javascript object using JSON.parse()
// 6: console log the js data

const fs = require("fs");

const bioData = {
    name: "Bipin",
    age: 23,
    channel: "Practing node js"
};


const jsonData = JSON.stringify(bioData);

// fs.writeFile("jsonData.json", `${jsonData}`, (err, res) => {
//     if (err) throw err;
//     else {
//         console.log(jsonData)}
// })

// console.log(jsonData)
// console.log(bioData)
// fs.readFile("jsonData.json", "utf-8", (err, res) => {
//     if(err) throw err;
//     else{
//         console.log(res)
//     }
// });


const jsData = JSON.parse(jsonData);
console.log(jsData);
