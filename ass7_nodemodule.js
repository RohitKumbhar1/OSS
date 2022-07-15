var http=require('http');
var url=require('url');
var fs=require('fs');

var server=http.createServer(function(req,res){
							var p=url.parse(req.url,true).pathname;
							if(p != '/favicon.ico')
							{
							var cdate=new Date();
							var str="Request received at "+p+" at "+cdate.toString()+"\n";
							fs.appendFile("log.txt",str,function(err){
								if(!err)
								{
								console.log("log created");
								res.writeHead(200,{'content-type':'text/html'});
								res.write("Request is logged");
								res.end();
								}
								else{
									console.log(err.toString());
								}
							});
							
							}
							
});
server.listen(9000,function(){console.log("server up-start")});