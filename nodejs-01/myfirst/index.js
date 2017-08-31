var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World! 5711403366 Laksamee Prathumwan');
}).listen(8080); 
