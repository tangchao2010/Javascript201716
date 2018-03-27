// 箭头函数

// es6  箭头函数
// fn();
// function fn(num) {
//     return num;
// };
// let  不存在变量提升；
// let 声明的变量不能重复声明；
// let fn = function (num) {
//     return num;
// };
// let  fn=(num,index)=>{return num;}
// let  fn = num =>{return num};
// let fn = num =>num;
// let f =()=>console.log(num);
// 箭头函数： 没有了function   多了一个=>
// 如果只有一个参数时，可以把小括号省略
// 如果大括号只有一条return语句，可以大括号和return全部省略；

//
// function fn(b) {
//     return b;
// };
//
// let fn = b =>b;

// function fn(b) {
//     return function (c) {
//         return b+c;
//     };
// };
// let fn =b=>c=>b+c;// 高阶函数；大于等于两个箭头；

//
// function fn() {
//
// }
// let  f = ()=>{
//     console.log(this);// window;
//     // console.log(arguments);
// }
// let obj = {
//     fn:()=>{
//         console.log(this);// obj
//     }
// }
// obj.fn();
// 函数的上一级作用域 ：跟函数在哪定义有关，跟函数执行没有任何的关系
// var  t = 100;
// function total() {
//     var t = 10;
//     // 小函数在total形成的作用域中定义的；
//     return function () {
//         console.log(t);// 10
//     }
// }
// total()()
// 1.箭头函数没有this；箭头函数中的this指向上一级作用域中的this；
// 2.箭头函数中没有arguments
// 3.不能作为构造函数；
// class fn{
//      constructor(num){
//          // this-->实例
//          console.log(num);//100;
//      }

// };
// new fn(100);
// let obj = {
//     fn() {
//         console.log(1);
//     }
// }
// obj.fn();

// setTimeout((time)=>{},10,100)
let  f = ()=>{
    console.log(this);// {}
};
f.call(100);// 能够调用call方法； 因为没有this;不能改变其中的this指向；



