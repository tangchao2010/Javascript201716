// 内置模块 ： fs  url  http;
let fs = require("fs");

// 后端： 查数据；

//readFile  : 异步读取文件 [path,options,callback(error,value)];没有返回值，返回值是undefined；
//readFileSync ：同步读取 [path,options] 把读取出的数据放在方法的返回值中；

// 读取出的数据是一个字符串；
// console.log(fs);
// let  a = fs.readFile('./tsconfig.json','utf-8',function (e,v) {
//     console.log(e);// null 当读取数据报错时，把错误信息赋值给e;
//     console.log(v);// 文件中的数据,如果数据读取成功，则把读取出数据给v;
//
// });
// setTimeout(function () {
//     console.log(a);
// },3000)

// let  a = fs.readFileSync('./tsconfig.json','utf-8');
// console.log(typeof  a);
// console.log(100);

// wirteFile
//fs.writeFile(); //写文件,向文件中写入数据【path,data,options,callback】

// fs.writeFileSync:[path,data,options]
// 覆盖式写入；

// let  a =fs.writeFile('./tsconfig1.json',{name:'zf',age:9},'utf-8',function (e) {
//     // 当数据写入成功之后，进行回调；
//     console.log(e);// null
//
// });
// console.log(a);// undefined


// let f = fs.readFileSync('./tsconfig.json', 'utf-8');
// let newf = JSON.parse(f)
// newf.address = "huilongguan";
//
// let a = fs.writeFileSync('./tsconfig.json', JSON.stringify(newf), 'utf-8');
//
// console.log(a);// undefined

// JSON .
// console.log(document);

// readdir: 查看响应文件下目录文件  异步
// readdirSync :  同步；
fs.readdir("../1111",'utf-8',function (e,v) {
    console.log(v);// [ '1.复习.html', '2.制作网站.html', '3.http事物.html', '4.url.html' ]
});

// readFile  readFileSync   writeFile   writeFileSync  readdir  readdirSync
