let express = require('express');
let app = express();
let  fs = require('fs');
let path = require('path');
app.listen(8080);
console.log(__dirname);
app.get('/login',function (req,res,next) {
    // req  : query  path   host  url  header
    // res
    //  res.send  sendFile
    // req.setHeader('content-type','text/plain;charset=utf-8')
    // 如果是数字类型的，会默认转换为状态码；
    // res.json : 把对象转换成json的字符串，并且返回前端；
    // res.json({"a":"1"});
    // res.send({a:1});

    // 处理静态文件时；
 // fs.readFile('./dist/index.html','utf8',function (err,data) {
 //     res.end(data);
 // })
    // res.sendFile(path.join(__dirname,'./dist/index.html'))
res.redirect("https://www.baidu.com");// 重定向；
});
app.get('/index.css',function (req,res) {
    // res.sendfile(path.join(__dirname,'./dist/index.css'))
});