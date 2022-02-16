// The http.createServer() method includes request and response parameter which is supplied by Node.js

// The request object can be used to get information about the current HTTP request
// e.g., url, request header, and data,

// The response object can be used to send a response for a current HTTP requst

// If the response from the HTTP server is supposed to be displayed as HTML
// we should include an HTTP headeer with the correct content type

const http = require("http");
const fs = require("fs")
const process = require("process")

const data = fs.readFileSync(`${__dirname}/dataJson.json`, "utf-8")
const jsData = JSON.parse(data);
console.log(jsData)

const server = http.createServer((req, res) => {
  if (req.url === "./") res.end("Hello from the other side");
  else if (req.url === "/about") res.end("Hello from the About Us side");
  else if (req.url === "/userapi") {
    res.writeHead(200, {"Content-type":"application/json"})
    res.end(data)
    }
  
  else{
      res.writeHead(404, {"Content-Type":"text/html"})
      res.end(`<h2>404 Error page does not exists</h2>`)
  }
});

server.listen(8000, () => {
  console.log("Listening to the port no: 8000");
});
