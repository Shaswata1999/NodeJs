const express = require('express');
const app = express();
app.get('/',function(req,res){
    res.send("My name is Shaswata");
});
app.get('/about',function(req,res){
    res.send("About us");
});
app.get('/login',function(req,res){
    res.send("Welcome to login page");
});
app.get('/signin',function(req,res){
    res.send("Signup here");
});
app.listen(5500);