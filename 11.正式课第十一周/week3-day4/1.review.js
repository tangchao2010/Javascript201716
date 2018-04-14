// console.log(1);
let  fs = require('fs');
let  http = require("http");
let  url = require("url");
let  util = require("util");
let  read = util.promisify(fs.readFile);

http.createServer(function (req,res) {
    // 当访问相应的端口立即执行；访问一次执行一次；
    // req : 请求信息；
    // 通过get请求获取参数；
   let {pathname,query}=url.parse(req.url,true);

    console.log(pathname);// /week
    console.log(query);  // 数据的属性值是字符串类型；
   //query.id == id
   // req.method: 请求方式；并且属性值是大写的；
    // 浏览器只能发送get请求；
    // post : ajax
    //
    console.log(req.method);
    // res : 响应
    // 设置响应头
  read('./1.复习.html').then(function (data) {
    console.log(data);
  });
    // res.setHeader('content-type',"text/plain;charset=utf-8");//
    res.writeHead(404,{"content-type":"text/plain;charset=utf-8"})
    res.end("hello 你好");


}).listen(8080,function () {
    // 当监听成功，立即执行次函数
})