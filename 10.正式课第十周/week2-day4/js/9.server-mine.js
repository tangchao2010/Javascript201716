let  http = require('http');
let fs = require('fs');
let  url = require('url');// 处理路径一个模块
let  mime = require('mime');// 第三方模块；

// console.log(mime);
// console.log('/');
fs.readFile('../index.html','utf8',function (err,val) {
    console.log(val);
});
http.createServer(function (req,res) {

    let {pathname,query} = url.parse(req.url,true);
   //  /index.html   /index.css   /com/custom.json
    fs.stat('.'+pathname,function (err,stats) {
        if(err){
            res.statusCode=404;
            res.end(`${pathname} is not  found`)
        }else{
            if(stats.isFile()){// 校验是否是文件
                // let name = pathname.match(/\.(\w+)$/)[0];// 返回一个数组
                // console.log(mime.getType(pathname));
                // getType : 根据pathname获取当前文件的content-type类型；
                res.writeHead(200,{'content-type':mime.getType(pathname)+";charset=utf-8"})
                fs.createReadStream('.'+pathname).pipe(res);
            }
            if(stats.isDirectory()){// 校验是否是文件夹
                res.writeHead(200,{'content-type':'text/html;charset=utf-8'});
                fs.createReadStream('./index.html').pipe(res);
            }

        }
    })
}).listen(8080,function () {

    console.log("端口监听成功");
})
