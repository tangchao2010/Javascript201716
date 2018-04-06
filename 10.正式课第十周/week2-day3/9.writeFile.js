// readFile  : 读取文件
// writeFile :
let  fs = require('fs');
// 如果文件不存在，会默认创建一个文件；
// 会把原有的内容全部覆盖掉
// 会默认调用toString 转换成字符串写入文件；
fs.writeFile('./2.txt',"{month:April}",function () {
    console.log("写入成功")
});
fs.writeFileSync()// 同步的没有回调函数；

