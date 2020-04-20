var http = require('http')
var fs = require('fs')

http.createServer(function(req,res){
    fs.appendFile('newAppendFile.txt','Hello World!',function(err){
        if(err) throw err
        console.log("append file....")
    })
}).listen(8080)