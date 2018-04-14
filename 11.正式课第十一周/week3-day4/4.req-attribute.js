// let  url = require('url');
let  express = require('express');
let  app = express();
app.listen(8080);
app.get('/user',function (req,res) {
    // let {pathname,query}  = url.parse(req.url,true);
    // console.log(req.query.id);// 获取url中的参数；
    console.log(req.query);
    console.log(req.path);  // 是express 扩展的方法；是获取当前请求的路径；
    console.log(req.headers);// 请求头信息（属性名是小写的）
    console.log(req.method);// 代表当前的请求方式；
    console.log(req.host);// localhost 主机名称，不带端口号；
    console.log(req.url);// /user?id=12&user=aaa  路径+参数；
    console.log(req.params);// 对象类型的； 代表的动态的路径参数；
    // res.send   res.sendFile;
});