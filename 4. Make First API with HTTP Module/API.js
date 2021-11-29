var http = require('http');
var data = [
    {name:"Shaswata",age:"22",email:"shaswata.barua0499@gmail.com"},
    {name:"Sayan",age:"24",email:"sayanjashu@gmail.com"}
]
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'application\json'})
    res.write(JSON.stringify(data));
    res.end();
}).listen(3000)