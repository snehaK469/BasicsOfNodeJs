var http = require('http')
var adr = "http://localhost:8080/default.htm?year=2017&month=february"
var url = require('url')

var q = url.parse(adr,true)

console.log(q.hostname);
console.log(q.pathname);
console.log(q.search)

var qData = q.query;
console.log(qData.month)