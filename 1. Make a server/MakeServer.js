var http = require('http');
http.createServer(function(req,res){
    res.write("I'm Shaswata");
    res.end();
}).listen(5000)