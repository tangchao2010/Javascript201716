// 复习数组
//   1.  四个循环 ： for   for  in  for of  : 编程式
// for  : 遍历数组；带有length；
// for  in  : 遍历对象； 可以遍历可枚举的属性； key : string;
// for  of  : 不能遍历对象 遍历数组
// let obj = {name:"zf"};
// for(let key of obj){
//     console.log(obj[key])
// }

// 可枚举： 私有 ，原型上扩展的属性
// hasOwnProperty
// Array.prototype.sum = function () {
//
// }
// let obj = {name:"zf"};
// for(let key of obj){
//     console.log(obj[key])
// }
// forEach : 声明式；不关心如何实现的； 没有return；
// let  arr = [1,39,99,7];
// let  a = arr.forEach(function (item,index) {// item : 每一个成员  index : 索引
//     console.log(item)
//     return 1;
// });
// console.log(a);// undefined : 没有返回值；

//2、 map : 映射； 用原数组映射成一个新的数组； 有return；
// let  newArr = arr.map(function (item,index) {
//
//    return `<li>${item}</li>`;
// })
// console.log(newArr.join("+"));

//3、 filter: 过滤； 返回值 返回一个新的数组  原有数组不变；

// let  arr = [100,39,99,7];
// let  newArr =arr.filter(function (item,index) {
//     return item>30;
// });
// console.log(newArr);
// let  newArr = arr.filter((item,index)=>item>30&index>1);
// console.log(newArr);

// 4、find ： 原有数组不变;查找；找到符合条件的第一项；只要找到那一项，立即返回；方法结束
//  let  a = arr.find(item=>item>66);
// console.log(a);

// let  arr = [100,39,99,7];
// 5. some  : 返回一个布尔值；true和false； 查找找到符合条件返回true；如果没有符合条件的返回false
// let a = arr.some(function (item,index) {
//     return item >200 && item <100;
// })
// console.log(a);

// 6、every:查找false ；找到之后马上返回，结束整个函数；如果都满足条件，返回true；
// let a = arr.every(function (item,index) {
//     console.log(item);
//     return item >0;
// })
// console.log(a);

// 7、includes ： 是否包含某一项 有就返回true，没有就返回false；es6;
// indexOf  : 返回第一次出现的索引位置；没有返回-1；

// console.log(arr.includes(99));

// 8、reduce: 收敛；求和；
// let  arr = [100,39,99,7];
// let  sum = arr.reduce(function (prev,next) {
//     // 第一次进来，prev : 第一项  next : 第二项
//     // 之后： prev 代表上一次回调函数的返回值；
//     console.log(prev);// 100  代表上一次回调函数的返回值；
//     console.log(next); // 39
//     return prev + next;
//     // undefined : 代表上一次回调函数的返回值；
// },0);
// console.log(sum);
let  arr = [{count:3,price:5},{count:4,price:6},{count:5,price:10}];
// 求总价：
let  sum = arr.reduce(function (prev,next) {
    // prev :15
    return prev + next.count*next.price;
},0);
console.log(sum);













