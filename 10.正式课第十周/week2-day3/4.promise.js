// promise :  resolve: 成功态  reject  失败态
// 解决异步的问题
let fs = require('fs');
let util = require('util');
let read = util.promisify(fs.readFile);// 返回一个promise版本的函数；
// function read(url) {
//     return new Promise(function(resolve,reject){
//         fs.readFile(url,'utf8',function (err,val) {
//             if(err) reject();
//             resolve(val)
//         })
//     })
// }
// read('./1.txt').then(function(data){
//     fs.readFile(data,'utf8',function (err,val) {
//         console.log(val);
//     })
// },function(err){});
let a = read('./1.txt', 'utf8').then(function (data) {
    // 读取的内容
    console.log(data);
    // console.log(read(data));
    return read(data, 'utf8')
    // 必须return出一个promise 实例；否则不会再去调用到第二个then方法；
}).then(function (data) {
    // console.log(data);
    // 如果then只有一个方法；那么当成功时调用；
    return data + "16期";
}).catch((err) => {
    console.log(err) // 如果上面有一个reject，直接执行catch中的方法
});
// promise 的链式方法调用；
// setTimeout(function () {
//     console.log(a);
// },3000);