var http = require('http');
var fs = require('fs');

http.createServer(function (req,res) {
    fs.readFile('Explain.txt',function(err,data) {
        res.writeHead(200,{'Content-Type':'text'})
        res.write(data);
        return res.end();
    })
}).listen(4100)