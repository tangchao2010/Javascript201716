let  fs = require('fs');
let  util = require('util');
let  read  = util.promisify(fs.readFile);
// Promise构造函数的私有属性；
//  如果是相同的数据量，那么谁在前面先读取谁；
// Promise.race([read('./1.txt',"utf8"),read('./2.txt','utf8')]).then(val=>console.log(val),err=>{console.log(err)});


//  resolve : 成功
Promise.resolve("welcome").then((data)=>console.log(data),err=>{console.log(err)});
