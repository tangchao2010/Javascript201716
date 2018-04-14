let express = require('express');
let app = express();
app.listen(8080);
// 查询所有的用户  查询某个用户；
//  /user   所有的     /user/1
// app.get('/user',function (req,res) {
//     console.log(1);
//     res.setHeader("content-type","text/plain;charset=utf-8")
//     res.end("所有的用户")
// });
// app.get('/user/1',function (req,res) {
//     res.setHeader("content-type","text/plain;charset=utf-8")
//     res.end("某个用户");
// })
// 动态的路由；
app.get('/user/:id',function (req,res) {

    // req.params;
    console.log(req.params);// { id:'2', name:'a'}当前的路由的路径参数；
    res.end(req.params.id);
});

let  str = '/user/2/a/bbb';
let  str1 = '/user/:id/:name/:user';
//  { id:'2', name:'a'};
// 1.获取到id 和name放在数组中；
let arr = [];
str1.replace(/:([^\/]+)/g,function () {
    // 捕获几次，执行几次
    arr.push(arguments[1]);
});
let  result = {};
let  newArr = str.split('/');
arr.forEach((item,index)=>{
    result[item] = newArr[index+2];
})
// console.log(result);






