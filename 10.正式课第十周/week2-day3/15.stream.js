let  fs = require("fs");
// fs.readFile()
// 限制每次最多读取多少,默认64K
let  rs = fs.createReadStream('1.txt',{highWaterMark:1});

//req.on()
// 监听data事，不断去触发data事件；emit
let  arr = []
rs.on('data',function (chunk) {
    // 异步方法
    arr.push(chunk);
    rs.pause();// 暂停读取
    setTimeout(function () {
        rs.resume();
    },1000)
    // rs.resume();// 恢复读取
    console.log(chunk.toString());
});
console.log(1);
rs.on('end',function () {
    // 当文件读取完毕，会触发end事件行为；
    // console.log("读取完毕")
    console.log(arr);
    // console.log(Buffer.concat(arr).toString());
});


//rs.on('data')  rs.on('end')  rs.pause()  rs.resume()
