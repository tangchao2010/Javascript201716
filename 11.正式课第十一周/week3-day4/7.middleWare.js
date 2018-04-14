let  express = require('express');
let app = express();
app.listen(8000);// 0<=prot <=65535;

console.log(app.use);
// 在目标路径被访问前，做的相应的处理；比如可以给req,res新增方法；设置响应头；
// 一般中间件放在页面的顶部‘；
// 如果中间件 只有一个回调函数，那么会匹配所有的路径；
app.use(function (req,res,next) {
    // 匹配路径以什么开头的路径
    console.log(1)
    res.setHeader('content-type',"text/plain;charset=utf-8");
    //这里的回调函数当只有调用next时，才会继续向下执行；不调用不能继续向下执行；
    req.food = "白菜";
    req.mySend = function () {
        console.log("风很大")
    };
    next();
});
// 中间件可以有多个，在每个中间中处理不同的逻辑；
app.use('/login',function (req,res,next) {
    // console.log(2);
    // console.log(req.food);

    next();
});

app.get('/login',function (req,res) {
    req.mySend();
    res.end("登录")
})
app.get('/register/a',function (req,res) {


    res.end("注册")
});



