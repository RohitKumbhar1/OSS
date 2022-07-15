var exp=require('express');
var app=exp();
app.get('/home',function(req,res){
				res.send("<h1>Welcome to web app</h1>");
				});
app.all('*',function(req,res){
	res.send("Invalid URl!!");
});
app.listen(9000,function(){console.log("express server started at 9000")});