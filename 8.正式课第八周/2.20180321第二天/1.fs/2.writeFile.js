const  fs = require('fs');// 导入内置模块；
// readFile
// readFileSync

// console.log(1.fs);
// 1.fs.writeFile : 往文件中写入数据；
// 1.fs.writeFile(pathname,[content],'编码格式'，callBack)
// 1.fs.writeFile 写入时要求也是字符串格式；而且是覆盖式，把之前的内容全部覆盖
// 1.fs.writeFileSync(pathname,content,type)  没有回调函数；
fs.readFile('../json/data2.json','utf-8',(error,value)=>{
    // console.log(typeof value); string
    if(error){
        console.log(error)
    }else{
       let a = fs.readFileSync('../json/data1.json','utf-8');
       let newAry = JSON.parse(a);
       newAry.push(JSON.parse(value));
       fs.writeFile('../json/data1.json',JSON.stringify(newAry),'utf-8',(e,v)=>{
            // console.log(e);// null
            // console.log(v);// undefined
        })
    }
});



