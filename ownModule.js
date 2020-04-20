var htttp = require('http');
var dt = require('./dateTime')

htttp.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write("current date and time" + dt.myDateTime());
    res.end();
}).listen(8080)