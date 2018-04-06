let  fs = require('fs');
let  util = require('util');
let  read  = util.promisify(fs.readFile);
let  school = {};
// all : 全部所有的；
console.log(Promise.all);
// Promise.all : 返回一个Promise的实例；处理所有的异步问题；当所有的异步执行成功 之后，会调用then中resolve方法；
// 会把所有读取出的内容的结果以数组的形式传给then中的resolve方法；通过参数接收；
// 必须要求所有的 都异步读取成功，才能执行resolve;
Promise.all([read('./1.txt','utf8'),read('./2.txt','utf8')]).then(function (data) {
    // data:
    console.log(data);
},function (err) {
    console.log(err)
});

async  function  result() {
    // 解构赋值取到结果对应的值；
    let [name,age] = await  Promise.all([read('./1.txt','utf8'),read('./2.txt','utf8')]);
    console.log(name);
    console.log(age);
}
result();
