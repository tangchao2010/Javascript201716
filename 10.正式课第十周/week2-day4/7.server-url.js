let  http = require('http');
let fs = require('fs');

http.createServer(function (req,res) {
    let  pathname = req.url;
    if(pathname==="/" || pathname==='/index.html'){
        res.writeHead(200,{'content-type':'text/html;charset=utf-8'});
        fs.readFile('index.html','utf8',function (err,val) {
            res.end(val);
        });
    }else if(pathname==='/3.copy.js'){
        //  js引进来，并且js从上到下运行；
        res.writeHead(200,{'content-type':'application/javascript;charset=utf-8'});
        fs.readFile('./3.copy.js','utf8',function (err,val) {
            res.end(val);
        });
    }


}).listen(8080,function () {

    console.log("端口监听成功");
})
