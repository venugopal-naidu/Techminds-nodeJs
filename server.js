var http=require("http");
var server=http.createServer(function(req,res) {
	res.writeHead(200,{"Content-Type":"text/palin"})
	res.end("heloo bangalore");

	// body...
});
server.listen(8081,function(){
	console.log("server");

})