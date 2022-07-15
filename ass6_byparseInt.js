var http = require('http');
var url = require('url');
var fs = require('fs');
var server = http.createServer(function(req,res){	
	var url_p = url.parse(req.url,true).pathname;	
	var n;
	if(url_p != '/favicon.ico')
	{
	    
		fs.readFile('count.txt', function(err, data){
			if(!err)
			{
				console.log("counted visitor");	
				res.writeHead(200,{'content-type':'text/html'});
				n=parseInt(data);
				n++;
				res.write("visit count:"+n);
				
				res.end();							
			}
		else		
			console.log(err.toString());
	
		});	
		var str=n;
		fs.writeFile('count.txt',str,function(err){
			if(!err)
			{
				res.writeHead(200,{'content-type':'text/html'});
		res.write("Logged in");
				console.log("file is updated");
				res.end();
			}
			else
				console.log("error in updating");
		});	
}});
			
	   		
	


server.listen(9003, function(){
	console.log("server running at 9003");
})