
let express = require('express');// 第三方，node的框架
let app = express();
app.listen(8080);
// 当对应路径参数有name参数时，才能拦截；
app.param('name',function (req,res,next) {// next : 函数数据类型的，让请求继续向下执行；
    //
    //  console.log(1);
    res.setHeader('content-type','text/plain;charset=utf-8');
     req.a = '你很好';
     next();// 让当前请求继续向下执行；
});
app.param('id',function (req,res,next) {// next : 函数数据类型的，让请求继续向下执行；
    res.setHeader('content-type','text/plain;charset=utf-8');
    req.a = '你很好';
    console.log(req.params.id);
    let  ary = [{id:1},{id:2}];
    ary.forEach(item=>{
        if(item.id===req.params.id){
            req.user = item;
        }
    })
    next();// 让当前请求继续向下执行；
});

app.get('/user/:id/:name',function (req,res,next) {
    console.log(2);
    res.end(req.user)
})
app.get('/login/:id/:name',function (req,res,next) {
    console.log(3);

    res.end(req.a)
})