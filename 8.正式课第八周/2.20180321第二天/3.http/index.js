const http = require("http");
// console.log(http);
// createServer :创建一个服务；
let  server = http.createServer(function (request,response) {
    // 回调函数的执行： 当客户端访问一次当前端口，那么回调会执行一次；默认给当前给当前回调函数传递两个参数
    //request : 包含客户端所有的请求信息； 对象
    // response ： response 包含了服务端所有的响应信息还有一些返回给客户端的方法；
    response.end()// 把服务端读取的内容返回给前端
    console.log(request.url);// 访问路径
    ///stu/index.html
    response.end("nihenhao");
});
// 设定端口号进行监听；
// 0-65535
server.listen(8089,function () {
    // 如果当前服务创建成功，那么回调函数执行；
    console.log("监听成功")
});
// http://192.168.0.42:63342/Javascript201716/7.正式课第七周/4.20180317第四天/8.css3动画.html  === /Javascript201716 localhost:63342

//http://192.168.0.42 和 localhost 是一样的；