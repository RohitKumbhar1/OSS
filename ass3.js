var h = require('http');

var server=h.createServer(function(req,res){
	res.writeHead(200,{'Content-type':'text/html'});
	res.write("<h1> Hello from  NodeJs</h1>");	
	res.end();
});
server.listen(9000,function(){ console.log("server up on 9000")});


//i/p --request from client side= http://localhost:9000/

//o/p= Hello from NodeJs