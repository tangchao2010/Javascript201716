// fs  : 读写文件的；
// document
// console.log(document);// document  node 中js;读文件，写文件；
// 数据来源---> 文件
// 导入模块
let fs = require("fs");
// console.log(fs);

//  1. readFileSync : 同步读取；
//  2. readFile(path,options,callBack) : 异步读取
// fs.readFile('./1.txt',function (err,val) {
    // 1. 当读取内容成功之后，会执行此回调函数
    // 2.err : 当读取失败时，输出的内容；默认是null；
    // 3.val : 读取的内容，读取失败的val是undefined；
    // 4.options可以不传，那么默认读取是buffer类型
//     console.log(err);
//     console.log(val);// string
//     console.log(1);
// });
// console.log(3);

//readFileSync(path,options)  会把读取出的数据放进方法的返回值；
// 读写文件时需要消耗时间的；能用异步不要用同步；
// let con = fs.readFileSync('./1.txt','utf-8');
//
// console.log(1)
// console.log(con);


// 2.
// writeFileSync(path,data,"options")
// writeFile(path,data,'options',callBack)
// 新的内容会替代原有的内容；需要字符串数据类型的；如果不是，那么会把它转换成字符串；
// console.log(({name: "a"}).toString());// '
// console.log([].toString());// ""
// fs.writeFile('./1.txt',"welcome to zf",'utf-8',function (err,val) {
    // console.log(err)// null
    // console.log(val)
    // console.log(1)
// });
// console.log(2);


// fs.readFile('./1.txt','utf-8',function (err,val) {
//     fs.writeFile('./1.txt',val+' welcome to  zf','utf-8',function (err) {
//     })
// })

// fs  : 文件操作系统；
// readdir ： 查看当前文件目录
// readdirSync
fs.appendFile('./1.txt',"hehe",'utf-8',function (err) {
    
});




