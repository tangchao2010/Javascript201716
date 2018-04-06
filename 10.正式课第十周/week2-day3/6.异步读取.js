let  fs = require('fs');
let  util = require('util');
let  read  = util.promisify(fs.readFile);
let  school = {}
read('./1.txt','utf8').then(function(val){
    // 异步
    school.name=val;
    out()
},function (err) {
    console.log(err);
})
read('./2.txt','utf8').then(function(val){
    school.age=val;
   out()
},function (err) {
    console.log(err);
});

// 把异步的结果同时输出；
function out() {
    // 只要两个都有值的前提下，才会输出；
    if(school.name&&school.age){console.log(school)}
}
