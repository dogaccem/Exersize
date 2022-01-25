const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
    if(req.url=='/'){

        fs.readFile('./index.html',function(err,data){
            if(err == null){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.end(data);
            }
            else{
                res.writeHead(500);
                res.end("sunucu hatasi");
            }
            
        })
    }
    else if(req.url=='/about'){
        fs.readFile('./about.html',function(err,data){

            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(data);
        })
    }
    else{

        fs.readFile('./404.html',function(err,data){

            res.writeHead(404,{'Content-Type':'text/html'});
            res.end(data);
        })
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});