// promise : 处理异步
// let  vege = '';
// function buy(callBack) {
//     setTimeout(function () {
//         vege="白菜";
//         callBack(vege);
//     },2000)
// }
// buy(cook);
// function cook(val) {
//     console.log("可以做"+val)
// }
// 解决异步的方案： 回调函数；
// promise : 承诺；

//三个状态： pending  fulfiled    rejected

new  Promise(function (resolve,reject) {
    let a ;
    setTimeout(function () {
        a =10;
    },2000);
    if(a){
        resolve()// then 中的第一个方法
    }else{
        reject()
    }
}).then(function () {
    console.log("走路")
    // 代表成功状态执行的函数
},function () {
    console.log("骑摩拜")
    // 代表失败执行的函数；
})

