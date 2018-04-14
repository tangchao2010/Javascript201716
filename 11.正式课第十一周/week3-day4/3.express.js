// express  是node的一个框架；
//  导入模块；
// require : common.js
// 导入
let  express = require('express');
//console.log(express);// createApplication  返回一个函数；
// 执行createApplication
let  app = express();// http.createServer().listen()
// console.log(app);// 对象
// 监听一个8000 的端口；
app.all('/order',function (req,res) {// 当请求成功后执行的回调；
    // req: 请求信息  res 响应信息；
    console.log(1);
    console.log(req);
    console.log(res);
    res.end("world")
});
app.listen(8000,function () {
    console.log('监听成功')
});
//  get  post  put   delete

// app.get(path,function(req,res))
// 第一个参数： 代表请求路径
// 第二个参数：代表请求路径下的回调函数

//  // req: 请求信息  res 响应信息；
app.get('/user',function (req,res) {// 当请求成功后执行的回调；
    // req: 请求信息  res 响应信息；
    // console.log(req.method);
    // console.log(res);
});
// app.all('/order',function (req,res) {// 当请求成功后执行的回调；
//     // req: 请求信息  res 响应信息；
//     console.log(1);
//     console.log(req);
//     console.log(res);
//     res.end("world")
// });
// app.all :各种请求方式；
//  app.all("*",function (req,res) {
//      res.end('not  found')
//  })
