// server  : 服务 ；  监听：监听当前服务器的端口号；
// 前端： url  ajax src  href   fetch ： 基于promise的ajax


// 服务器 ： 专业服务器  云服务器（阿里云）  自己电脑主机；
// localhost === 127.0.0.1---> 本机
 // 端口号：0-65535  最好3000以上；

// https://www.baidu.com/?tn=78040160_26_pg&ch=1
//  协议  ： 传输协议；
//  域名www.baidu.com
//  路径
// ?参数
// Hash值

let http = require('http');

http.createServer(function (req,res) {
    // 第一个参数
    // console.log(req);// 请求对象；
    // console.log(res);
    // console.log(1);
    // 当客户端发送请求时，访问对应的端口下的文件，执行此处的回调函数
    // res : 存储了一些响应的方法；  res.end()
    // 把end中参数返回给客户端；
    // 设置响应头
    res.setHeader("content-type","text/plain;charset=utf8");
    //  服务器返回客户端时，客户端不知道当前是什么类型的；不知道按照哪个类型数据进行渲染；
    // 在响应头中设置类型告诉浏览器按照什么类型的渲染；
    res.end("你很帅");// 结束响应；


}).listen(8081,function () {
    // 当端口号监听成功，就会触发这个回调函数
    console.log("监听成功");
})





