// node天生自带模块化；
// global

// console.log(this);// {} 输出当前模块下的this；当前私有作用域中的this； 模块中this，默认指向{}；

// let  a = 10;// 当前模块的私有变量；在另一个模块下不能使用；
// global.a = 10;

//  在node中，一个js文件就是一个模块,模块中就有一个自执行函数；
//console.log(require)// 函数天生自带参数集合
//exports    都是执行函数的形参；
(function(exports,require,module,filename,dirname){
    module.exports = exports  = {};



    return module.exports;// {}
})();

// exports : 对象  导出
// require : 导入模块
// module :对象
// filename : 当前文件的绝对路径
// dirname : 当前文件夹目录的绝对路径；

console.log(exports);


