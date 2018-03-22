const  fs = require("fs");

// 1.fs.readdir : 读取相应路径下的文件名

let b = fs.readdir("../less",(error,value)=>{
    console.log(error);
    // value : 以数组形式返回，数组中每一项都是对应的文件名；
    console.log(value);
});

// 1.fs.readdirSync 返回值是一个数组
let a = fs.readdirSync('../less');

console.log(a);



