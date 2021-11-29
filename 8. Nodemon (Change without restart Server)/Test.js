var http = require('http');
http.createServer(function(req,res) {
    res.write("Hello Nodemon. I'm Shaswata")
    res.end();
}).listen(4000)