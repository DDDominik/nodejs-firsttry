var http = require('http'),
fs = require('fs'),
url = require('url');

http.createServer(function (req, res){  
	if (req.url == "/") {
		fs.readFile('index.html','utf-8',function (err,data){
			// if(err){throw err;}
			res.writeHead(200,{'Content-Type' : 'text/html'});   
			res.end(data);  
		});
	}

	  // About页面
	else if (req.url == "/about") {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.end("Welcome to the about page!");
	}

	  // 404错误
	else {
		res.writeHead(404, { "Content-Type": "text/plain" });
		res.end("404 error! File not found.");
	}
}).listen(8080);  

console.log('Server running at http://127.0.0.1:8080/');