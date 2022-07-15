var exp=require('express');
var app=exp();
app.get('/home',function(req,res){
				res.send("<h1>Welcome to web app</h1>");
				});
app.get('/login',function(req,res){
				res.sendFile(__dirname+"/login.html");
				});
app.get('/logincheck',function(req,res){
				if(req.query.uid=="object" && req.query.pwd=="knowit")
					res.send("<u>Login Successfull</u>");
				else
					res.send(" <q>Failed login</q>");
				});
				
app.all('*',function(req,res){
	res.send("Invalid URl!!");
});
				
app.listen(9000,function(){console.log("express server started at 9000")});
