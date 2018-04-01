// function sum() {
//     var  total = 0;
//     for(var i=0;i<arguments.length;i++){
//         if(!isNaN(arguments[i])){
//             total +=arguments[i]
//         }
//     }
//     return total;
// }
// function plus() {
//    console.log("plus")
// }

// module.exports.sum = sum;// exports : 把当前的方法暴露出去；
// module.exports.plus = plus;// exports : 把当前的方法暴露出去；
// exports.sum  = sum;// 空间地址没有发生变化；
// exports = {// exports 重新指向一个新的空间地址；
//     sum:sum,
//     plus:plus
// }
// console.log(1);


// function sum() {
//     // console.log(arg instanceof Array);// [ 1, 3, 3, 4, 5 ]
//     console.log(arguments);// 1.转数组    2.reduce；
//     // for  slice.call(arguments) Array.from();
//     let  ary = Array.from(arguments);
//     return  ary.reduce(function (prev,next) {
//         return prev + next;
//     })
// }
// sum(1,3,3,4,5);

// function sum(...arg) {
//     arg.reduce(function (prev,next) {
//         return prev + next;
//     })
// }
// sum(1,3,3,4,5);
let  sum=(...arg)=>arg.reduce((prev,next)=>prev+next);
console.log(sum(1, 3, 3, 4, 5));
// instanceof
// typeof  : 检测基本数据类型  null--->"object"
// constructor : 构造函数；
// Object.prototype.toString.call()    "[object String]"
// console.log(a.constructor === Array)
//...: 扩展运算符
// let  a = [1,2,3];
// let b = [5,6,7];
// console.log(a.concat(b));
// console.log([...[1,2,4],...[5,6,7]])// es6语法；
// console.log({...{name:"zfpx"},...{age:"9"}}); // es7 语法

// 剩余运算符 ： 把多余的项放进数组中；
