var http = require('http');
var uc = require('upper-case')
http.createServer(function(req,res){
    res.write(uc.upperCase("I'm Shaswata"));
    res.end();
}).listen(3500)