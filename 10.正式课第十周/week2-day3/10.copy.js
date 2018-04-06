let  fs = require('fs');

function copy(source,target,callBack) {
     fs.readFile(source,'utf8',function (err,val) {
         fs.readFile(target,'utf8',function (err,val1) {
             fs.writeFile(target,val1+val,'utf8',function (err,val2) {
                 callBack(err);
             });
         })
     })
}
copy('./2.txt','./1.txt',function (data) {
    if(data){ return console.log(data)}
    console.log("拷贝成功")
});
// promisify :()
