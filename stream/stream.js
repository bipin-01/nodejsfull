const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on('request', (req, res)=>{

    // const rstream = fs.createReadStream("input.txt");       //change the file name to inputss.txt and check the output

    // rstream.on("data", (chunkData) => {
    //     res.write(chunkData)
    // });

    // rstream.on("end", () => {
    //     res.end();
    // } )

    // rstream.on("error", (err) => {
    //     console.log(err);
    //     res.end(`${err}`);
    // })

    const rstream = fs.createReadStream('input.txt');
    rstream.pipe(res);

    const rstream2 = fs.createReadStream('input1.txt');
    rstream2.pipe(res);
});

server.listen(8000, 
    console.log("Server running on Port 8000"))