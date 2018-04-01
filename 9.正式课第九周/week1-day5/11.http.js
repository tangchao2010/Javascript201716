let  fs = require('fs');
let  http = require('http');
let url = require("url");
// 上线 ： 把最新的项目，迭代更新项目部署到服务器；
// 线上环境
// 开发环境
// 0-65535:一台服务器可以部署多个项目；
let server = http.createServer(function (request,response) {// req: 请求信息  res:响应信息
    //  当请求服务器对应的端口号一次，回调函数执行一次
    // 1. 请求 : 浏览器  2. ajax    3.src    4.link    5.a的href
    // console.log("你很帅");
    // response.writeHead: 设置响应头  告诉浏览器按照什么数据类型进行解析；
    // 200 : status ；
    // response.end : 结束响应；
    // console.log(request.url);
   let {pathname}=url.parse(request.url);
   let  con = fs.readFileSync(`.${pathname}`,'utf-8');
    response.end(con);
    // response.writeHead(200,{'content-type':'text/plain;charset=utf-8'})
    // response.end("我很帅");

});
server.listen(8081,function () {// listen EADDRINUSE :::8080 当前端口被占用； 一个端口只能起一个服务
    // 当监听成功，执行此回调函数；
    console.log(1)
});
// ftp : 把项目部署到服务器；



