let  fs  = require('fs');
// 第二个参数
// 如果文件不存在，也不会报错；会默认创建出一个文件；
// 16*1024
let  ws = fs.createWriteStream('./2.txt',{highWaterMark:4});
// Invalid non-string/buffer chunk :无效的不是字符串或buffer
let  a = ws.write('1');
// 如果返回值true，可以继续往内存中存入；返回false，说明内存已满，需要等待内存中数据全部写入目标文件之后，才可以继续读；

let  b = ws.write('1');
// 当内存区全部转移到目标文件中，并且还有未处理的内容，那么会默认调用drain这个方法；
 ws.on('drain',function () {
     console.log(1)
 })
console.log(a);
console.log(b);