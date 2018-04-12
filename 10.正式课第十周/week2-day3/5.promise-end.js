
let fs = require('fs');
let util = require('util');
let read = util.promisify(fs.readFile);// 返回一个promise版
// let a = read('./1.txt', 'utf8').then(function (data) {
//     return read(data, 'utf8')
// }).then(function (data) {
//
//     return data + "16期";
// }).catch((err) => {
//     console.log(err) // 如果上面有一个reject，直接执行catch中的方法
// });
// promise 终极方法 ： es7 语法 ； node 至少7.9 以上；
// es6 es7
// let  arr = [1,3]
// let  arr2 = [2,3]
// let a = [...arr,...arr2]
//
// let  obj = {a:1}
// let  obj1 = {b:2}
// let  newObj = {...obj,...obj1}
// //
// Object.assign()

//  async  await  :
 async function result(url) {
         console.log(1);
         let content = await  read(url,'utf8');
         let  a =  await read(content,'utf8');
         console.log(2);
}
result('./1.txt');
