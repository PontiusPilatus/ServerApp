const http = require("http");

var server = http.createServer((req, res) => {

  res.writeHead(200, {"Content-type": "text/plain"});
  res.end("Hello, World!");
})

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server is running");
