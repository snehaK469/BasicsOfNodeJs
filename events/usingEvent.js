var fs = require('fs')
var rs = fs.createReadStream('./demoEvent.html');

rs.on('open',function(){
    console.log("file is open.")
})