// console.log("22");
//alert(15)
//  在客户端最大的全局对象是window
//  浏览器可以前端代码提供运行环境

//node提供的环境； 最大的全局对象是global；
//console.log(window);// window  在node环境中不存在；
// buffer : 缓存区；

// console.log(global);
//console.dir / warn/ time/ timeEnd/info
// console.time("a")
// for(let i=0;i<1000000;i++){
//
// }
// console.timeEnd("a");// 7ms  输出时间差；
// 异步的；
// setTimeout(function () {
//     console.log(1)
// },1000);

//  NODE 属于单线程；存在异步；靠回调函数来解决异步的；
//  单线程
// 异步非阻塞： 采用了回调函数来解决非阻塞；
// I/o

// 主任务队列和等待任务队列：先执行主任务队列，后执行等待任务队列中的方法；

// 异步 ： 元素绑定事件行为
// 定时器
// 回调函数
// ajax
// promise : 解决异步；


// var start = Date.now();
// setTimeout(function () {
//     console.log(Date.now() - start);// 1011
//     for (var i = 0; i < 1000000000; i++){// 同步；
//     }
// }, 1000);
// setTimeout(function () {
//     console.log(Date.now() - start);//2252
// }, 2000);

// while
console.log(global.a);// undefined




