var http = require('http')
var formidable = require('formidable')
var fs = require('fs')

http.createServer(function (req, res) {

    //parse the file and upload
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {

            //save the uploaded file into folder
            var oldpath = files.filetoupload.path;
            var newpath = 'E:/Sneha/nodeJS_Practice/fileUpload/uploadedFiles/' + files.filetoupload.name;
            console.log("new path",newpath)
            console.log("old path",oldpath)
            fs.rename(oldpath, newpath, function (err) {
              if (err) {console.log(err)}
              res.write('File uploaded and moved!');
              res.end();
            });
        })
    }
    else {
        //create html form
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">')
        res.write('<input type="file" name="filetoupload"><br>')
        res.write('<input type="submit">')
        res.write('</form>')
        return res.end();
    }
}).listen(8080)