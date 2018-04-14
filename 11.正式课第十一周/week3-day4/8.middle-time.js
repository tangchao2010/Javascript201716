let express = require('express');
let app = express();
app.listen(8080);

app.use(function (req,res,next) {
    // 会把修改之后的req,res传递下一个中间件中；
    let  start = new Date();
    let  end = res.end;
    res.end = function (...arg) {// 剩余运算符；
        console.log(new Date()-start);
        end.call(res,...arg)// 扩展运算符；
    };
    next();
});

app.get("/login",function (req,res) {
    for(let i=0;i<100000;i++){
    };
    res.end('hello',1,2)
})
app.get("/register",function (req,res) {
    for(let i=0;i<10000000;i++){
    };
    res.end();
});