let  fs = require('fs');
//file  system : 文件系统
//readFile : 异步读取
fs.readFile('./1.txt',function (err,val) {
    if(err)return err;
    fs.readFile(val,function (err,val) {
        //<Buffer e7 8f a0 e5 b3 b0 e4 bd a0 e6 88 91 e4 bb 96>
        // buffer是缓存区： 16进制的  0-9a-f
        // 一个汉字三个字节；
        // ff--->十进制16*16-1   255
        console.log(val);
    });
})

// let a = fs.readFileSync('./1.txt','utf8');
// console.log(fs.readFileSync(a, 'utf8'));

// $("aa").addClass().removeClass().html()



