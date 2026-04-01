import http from "http" // importing a module

// const http = require('http');

// http module will help us in creating a server

const server = http.createServer((request, response) => {
    response.writeHead(200, {'content-security-policy':"text/plain"});
    response.end("Hello world");
})

server.listen(3010, ()=>{
    console.log("Server is running on port 3010");
})