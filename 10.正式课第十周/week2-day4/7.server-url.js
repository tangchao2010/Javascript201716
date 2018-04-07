let  http = require('http');
let fs = require('fs');
let  url = require('url');// 处理路径一个模块

http.createServer(function (req,res) {
    //  url.parse  --> pathname：路径  query: 参数
    // url.parse :第二个参数默认是false； true;把query这个参数转换成对象格式；
    // console.log(url.parse(req.url,true));
    let {pathname,query} = url.parse(req.url,true);
    //pathname  代表是端口号后面参数前面（？）的内容；
    fs.stat('.'+pathname,function (err,stats) {
        if(err){
            // 如果路径对应的文件不存在，那么返回客户端404；
            res.statusCode=404;
            res.end(`${pathname} is not  found`)
        }else{
            // 如果访问./  ./index.html
            // isDirectory : 是否是文件夹
            // console.log(stats.isDirectory());
            // 谷歌会自己识别是css,html,js；但是IE不能识别当前是什么文件类型；
            // 没有设置类型
            if(stats.isFile()){
                fs.readFile('.'+pathname,'utf8',function (err,val) {
                    res.end(val)
                })
            }
            if(stats.isDirectory()){
                // 如果路径只有/ 默认访问当前目录下的index.html;
                res.writeHead(200,{'content-type':'text/html;charset=utf-8'});
                fs.readFile('index.html','utf8',function (err,val) {
                    res.end(val);
                });
            }

        }
    })

    // let  pathname = req.url;
    // if(pathname==="/" || pathname==='/index.html'){
    //     res.writeHead(200,{'content-type':'text/html;charset=utf-8'});
    //     fs.readFile('index.html','utf8',function (err,val) {
    //         res.end(val);
    //     });
    // }else if(pathname==='/3.copy.js'){
    //     //  js引进来，并且js从上到下运行；
    //     res.writeHead(200,{'content-type':'application/javascript;charset=utf-8'});
    //     fs.readFile('./3.copy.js','utf8',function (err,val) {
    //         res.end(val);
    //     });
    // }else if(pathname==='/index.css'){
    //     fs.readFile('./index.css','utf8',function (err,val) {
    //         res.end(val);
    //     });
    // }


}).listen(8080,function () {

    console.log("端口监听成功");
})
