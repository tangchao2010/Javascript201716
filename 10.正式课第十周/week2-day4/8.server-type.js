let  http = require('http');
let fs = require('fs');
let  url = require('url');// 处理路径一个模块

let mime = {
    ".css":"text/css",
    ".js":"application/javascript",
    ".json":"application/json",
    ".jpg":"image/jpg"
}

http.createServer(function (req,res) {

    let {pathname,query} = url.parse(req.url,true);
   //  /index.html   /index.css   /com/custom.json
    fs.stat('.'+pathname,function (err,stats) {
        if(err){
            res.statusCode=404;
            res.end(`${pathname} is not  found`)
        }else{
            if(stats.isFile()){// 校验是否是文件
                let name = pathname.match(/\.(\w+)$/)[0];// 返回一个数组
                res.writeHead(200,{'content-type':mime[name]+";charset=utf-8"})
                fs.readFile('.'+pathname,'utf8',function (err,val) {
                    res.end(val)
                })
            }
            if(stats.isDirectory()){// 校验是否是文件夹
                res.writeHead(200,{'content-type':'text/html;charset=utf-8'});
                fs.readFile('index.html','utf8',function (err,val) {
                    res.end(val);
                });
            }

        }
    })
}).listen(8080,function () {

    console.log("端口监听成功");
})
