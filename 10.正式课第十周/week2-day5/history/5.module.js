// let  http = require("http")

// require是node环境中方法；
//  common.js: 模块化； CMD  AMD

// let  fs = require('fs');
// let {readFile,stat} = require("fs");
// readFile()
// let  c = require("./a.js");//

// export : 导出   import ： 导入
//  如果是自定义模块加上"./"
// Relative references must start with either "/", "./", or "../".
// {} ： 接口
// import  {firstName,lastName,year} from './a.js';
// import  也有声明变量的作用
import * as a from './a.js'
console.log(a);
a.fn();
// a = {};//  改变空间地址
// a.c = 100;// 不可以扩展；
// console.log(a.year);
// Identifier 'a' has already been declared
// let  a = 10;
// 修改某个变量的名字；
// import {lastName  as  surName} from './a.js'
// console.log(lastName);// 报错；