// fs  是一个内置模块
const fs = require("fs");
// 1.fs 是一个对象；
// 1.fs.readFile('./data1.json','utf-8',function (error,value) {
//     console.log(value);
//     console.log(error);
// }); // 读取文件


// console.log(1.fs);
// readFile : 异步读取文件数据的方法；第一个参数是路径，第二个参数返回的数据类型，默认是buffer数据类型的；第三个回调函数，当读取成功之后，会调用这个函数；回调函数中会默认传递两个参数；第一个参数： 如果数据读取失败，error代表错误信息，成功则是null；第二个参数如果数据读取成功，参数值是读取的值；读取不成功是undefined；

// 1.fs.readFileSync(pathname,type) 同步读取 等把文件中的数据读取成功之后才会下面的代码；
// 第一个参数： 路径  第二个参数： 返回的数据类型  函数的返回值是读取的数据；
let a = fs.readFileSync('./0.html', 'utf-8');
console.log(1);
// 通过以上两个方法读取出数据数据类型是字符串；
console.log(typeof a);

