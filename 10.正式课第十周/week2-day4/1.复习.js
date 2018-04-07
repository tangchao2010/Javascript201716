//promise
let  fs  = require('fs');
let  util  = require('util');
let  read=util.promisify(fs.readFile)

// fs  : readFile  writeFile  ; 能用异步最好不用同步；
// new Promise(function (resolve,reject) {
//
// }).then(function () {
//     // 返回promise实例
// },function () {
//
// }).then(function () {
//
// }).catch(function (err) {
//     console.log(err);
// });

// function read() {
//     return  new Promise()
// }
// read().then();

// Promise.all([read()]);
// Promise.race([read()]);
// // 默认调用Promise成功的方法；
// Promise.resolve().then();

//  fs.stat : 验证当前路径是否存在；
// fs.stat('./1.txt',function (err,stats) {
//     console.log(err);//如果路径正确，那么是null；
//     console.log(stats.isFile());// 路径不存在，那么stats是undefined
//     console.log(stats.isDirectory());// false
// });


// 发布订阅
// on emit  remove  once
// class A{}

//
// 默认读取是buffer 类型的；
let  rs = fs.createReadStream('./1.txt',{highWaterMark:2});
//
let  ary = [];
//req
rs.on('data',function (chunk) {
    ary.push(chunk);
    console.log(chunk.toString());
    rs.pause();//
    rs.resume();
});
// 当读取成功，再触发end事件；
rs.on('end',function () {
    console.log(ary);
    console.log(Buffer.concat(ary).toString());
})
console.log(rs);
// 把字符串转换成buffer
console.log(Buffer.from("123").toString());







