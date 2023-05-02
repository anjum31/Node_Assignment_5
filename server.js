var fs = require("fs");
var http = require("http");

var server = http.createServer(function (req, res) {
  if (req.url == "/" || req.url == "/home") {
    fs.readFile("./public/home.html", function (error, data) {
      if (error) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.write("Error:404 File Not Found");
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  } else if (req.url == "/about") {
    fs.readFile("./public/about.html", function (error, data) {
      if (error) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.write("Error:404 File Not Found");
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  } else if (req.url == "/contact") {
    fs.readFile("./public/contact.html", function (error, data) {
      if (error) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.write("Error:404 File Not Found");
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        console.log(data);
        res.write(data);
        res.end();
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("Error:404 File Not Found");
    res.end();
  }
});
server.listen(3000);
console.log("Server run successful");

