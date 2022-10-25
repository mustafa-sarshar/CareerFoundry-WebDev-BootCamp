const http = require("http");
const portNumber = 8080;

http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello Node!\n");
}).listen(portNumber);
console.log("Server is running in localhost on port: " + portNumber);