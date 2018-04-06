

let  fs = require('fs');
// ./    ../   /
// fs.stat('1.txt',function (err,stas) {
//     // console.log(err)
//     // 当前是否是文件  校验当前路径是否是一个文件，返回一个布尔值；
//     console.log(stas.isFile());
//     // 是否是一个文件夹
//     console.log(stas.isDirectory());
// })
// /// 默认创建当前的目录下；
// fs.mkdir('a',function () {
//     console.log("1")
// })
// fs.rmdir()
//  1. 一个一个创建
//  2.通过递归创建；

function make(url) {
    // a   a/b   a/b/c   a/b/c/d;
    // [a,b,c,d]  index
    // ary[a]
    // [a,b].join("/")
    let index=0;
    let ary = url.split("/");
    function makeDir(p) {
        fs.mkdir(p,function () {
            if(ary.length <= index)return;
            console.log(1);
            makeDir(ary.slice(0,++index+1).join("/"));
        })
    }
    makeDir(ary[index]);
}
make('a/b/c/d');