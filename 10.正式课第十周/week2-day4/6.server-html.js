let  http = require('http');
let fs = require('fs');
// 通过手动写服务，把HTML页面返回给客户端；
http.createServer(function (req,res) {
    console.log(100);
    // 请求几次，执行几次
    // setHeader : 只能设置content-type;设置响应类型
    // res.setHeader('content-type','text/html;charset=utf-8');
    // 可以设置状态码；
    // 200  301 302  304  403   404   500  503
    res.writeHead(200,{'content-type':'text/html;charset=utf-8'});
        fs.readFile('./index.html','utf8',function (err,val) {
            // 当文件读取成功之后返回；
            res.end(val);
    });

}).listen(8080,function () {
    // 一个端口号只能被一个服务监听；
    // Error: listen EADDRINUSE :::8080 : 当前端口号被占用；
    console.log("端口监听成功");
})
