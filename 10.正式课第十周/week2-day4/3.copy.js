let  fs =require('fs');
function copy(source,target) {
    let rs = fs.createReadStream(source,{highWaterMark:4});
    let  ws = fs.createWriteStream(target,{highWaterMark:1});
    rs.on('data',function (chunk) {
         if(ws.write(chunk)===false){
             rs.pause();
         };// string   buffer ;写入值是buffer，但是默认调用toString；
    });
    ws.on("drain",function () {
        rs.resume();
    });
    rs.on('end',function () {
        ws.end()// 关闭写入的通道，把内存中数据全部写入目标文件中；
    });

}
copy('./2.txt','./1.txt');