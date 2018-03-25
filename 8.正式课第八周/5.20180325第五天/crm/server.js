// 创建服务
let http = require('http');
let  url = require('url');
let  fs = require("fs");
http.createServer(function (req,res) {
    let {pathname} = url.parse(req.url,true);
    let result = fs.readFileSync(`./${pathname}`);
    let reg = /\.([0-9a-zA-Z])+$/;
   let suffixType=reg.exec(pathname)[0].substr(1).toUpperCase();
   let mineType = 'text/plain';
    switch (suffixType){
        case 'HTML':
            mineType = 'text/html';
            break;
        case 'CSS':
            mineType = 'text/css';
            break;
        case 'PNG':
            mineType = 'image/png';
            break;
        case 'JS':
            mineType = 'text/javascript';
            break;
        case "JSON":
            mineType = 'application/json';
            break;

    }
    res.writeHead(200,{'content-type':mineType+';charset=utf-8'});
    res.end(result);

}).listen(8080,function () {
    console.log("当前端口号已经监听成功");
})


