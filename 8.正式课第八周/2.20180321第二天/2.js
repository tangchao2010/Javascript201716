// 把模块1中的方法在当前模块中使用；通过require把模块引进来；相当于HTML文件中script标签；
// 自定义模块；require导入模块
let  queurl = require("./1.js");
console.log(queurl);
console.log(queurl.queryUrl);
// queurl("aaa")
// node 运行
//1. webstorm 自带运行node环境；可以让js文件在node环境中运行；右键 run + 文件名.js
//2. dos窗口下   node  +  2.js

console.log(100);