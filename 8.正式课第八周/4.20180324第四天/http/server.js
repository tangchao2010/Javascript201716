let http = require("http");// 导入内置模块；
// console.log(http);
// 1.创建一个服务；
//  服务：用来监听客户端发送的请求；

let server = http.createServer(function (req, res) {
    // 回调函数接收两个参数；第一个参数： 是所有的请求信息；第二个参数： 代表所有的响应信息；而且存在一些把响应内容返回给浏览器的一些方法；
    // 函数执行： 当端口被访问一次，那么回调函数就执行一次；
    // console.log(200);
    console.log(req.url);

});
server.listen(8080, function () {
    // listen : 第一个参数：端口号  当前服务监听哪个端口；一个端口只能被一个服务进行监听；
    // 一个服务只能监听一个端口号；
    // 第二个参数： 回调函数； 当服务监听成功之后，执行一次这个回调函数；
    console.log(100);

});


// localhost : 本地 ===  http:+ IP地址；