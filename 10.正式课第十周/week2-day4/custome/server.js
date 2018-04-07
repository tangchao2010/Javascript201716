let  http = require('http');
let fs = require('fs');
let  url = require('url');// 处理路径一个模块
let  mime = require('mime');// 第三方模块；
let users = [{username:'zfpx',password:'你好admin',id:1},{username:'zfpx',password:'admin',id:2}];
http.createServer(function (req,res) {
    let {pathname,query} = url.parse(req.url,true);
    if(pathname==="/user"){
        res.end(JSON.stringify(users))
    }
    if(pathname==="/add"){// 新增客户
        let str=''
        req.on("data",function (chunk) {
            str+=chunk;
        });
        req.on('end',function () {
            users.push(JSON.parse(str));

            users[users.length-1].id = users.length;
            res.end(JSON.stringify(users));
        })
    }
    if(pathname === '/delete'){
        let id = query.id;
        users=users.filter(item=>item.id!=id);
        res.end(JSON.stringify(users));
    }
    fs.stat('.'+pathname,function (err,stats) {
        if(err){
            res.statusCode=404;
            res.end(`${pathname} is not  found`)
        }else{
            if(stats.isFile()){

                res.writeHead(200,{'content-type':mime.getType(pathname)+";charset=utf-8"})
                fs.createReadStream('.'+pathname).pipe(res);
            }
            if(stats.isDirectory()){
                res.writeHead(200,{'content-type':'text/html;charset=utf-8'});
                fs.createReadStream('./index.html').pipe(res);
            }
        }
    })
}).listen(8080,function () {
    console.log("端口监听成功");
})

