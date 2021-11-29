var http = require('http');
var form = `
<h1>Hello Node jS</h1>
<input type='text'/><br> <br>
<input type='text'/><br> <br>
<input type='text'/><br> <br>`
http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':"text/html"})
    res.write(form);
    res.end();

}).listen(2000)