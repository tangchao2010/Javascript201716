
let  fs = require('fs');
let  http = require("http");
let  url = require("url");

http.createServer(function (req,res) {
    let  {pathname} = url.parse(req.url,true);
    // 每个路由中都要设置一下当前页面的放回的类型；
    if(pathname === '/signin'){
        res.setHeader('content-type','text/plain;charset=utf-8');
        res.end("请登录")
    }
    if(pathname==='/signup'){
        res.setHeader('content-type','text/plain;charset=utf-8')
        res.end("请注册");
    }
    if(pathname==='/user'){
        res.setHeader('content-type','application/json;charset=utf-8');
        fs.readFile('./user.json','utf8',function (err,data) {
            res.end(data)
        })
        // res.sendFile('./user.json')

    }





}).listen(8080);
