var fs= require('fs')

fs.open("openNewFile.txt","w",function(err){
    if(err) throw err
    console.log("save")
})