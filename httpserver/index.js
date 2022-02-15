// The http.createServer() method includes request and response parameter which is supplied by Node.js

// The request object can be used to get information about the current HTTP request
// e.g., url, request header, and data,

// The response object can be used to send a response for a current HTTP requst

// If the response from the HTTP server is supposed to be displayed as HTML
// we should include an HTTP headeer with the correct content type

const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello from the other side")
});

server.listen(8000, () => {
    console.log("Listening to the port no: 8000")
});

