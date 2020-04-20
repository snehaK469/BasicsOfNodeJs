// var http = require('http');
// var url = require('url');
// var fs = require('fs');

// http.createServer(function(req,res){
//     var q = url.parse(req.url, true);
//     var filename = "." + q.pathname;
// fs.readFile(filename, function(err,data){
//     if(err){
//         res.writeHead(404,{'content-type':'text/html'})
//         return res.end("file not found.")
//     }
//         res.writeHead(200,{'content-type':'text/html'})
//         res.write(data);
//         return res.end();
    
// })
// }).listen(8080)


var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
//   var q = url.parse(req.url, true);
//   var filename = "." + q.pathname;
  fs.readFile(filename, function(data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);