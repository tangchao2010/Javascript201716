
let http = require("http");
let fs = require('fs');
let  url = require('url');
http.createServer(function (req,res) {
    // console.log(100);
    // 当页面去请求index.css 时，后端读取的文件信息是index.html;
    // 在HTML页面中遇到link src(script、音视频、图片)；
    // 一般浏览器会识别后端响应过来的数据对应文件类型；但是IE浏览器不能识别的对应文件类型；需要后端配置响应头，告诉浏览器当前文件什么文件类型的；那么浏览器会根据响应头中的信息进行加载和渲染；
    let  {pathname} = url.parse(req.url);
    let con = fs.readFileSync(`.${pathname}`);
    let reg = /\.([0-9a-zA-Z])+$/i;

    let  type = reg.exec(pathname)[0].substr(1).toUpperCase();
    console.log(type);
    let mineType = 'text/plain';
    switch(type){
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
    };
    // writeHead  设置响应头； 第一个参数是状态码
    res.writeHead(200,{"content-type":mineType+";charset=utf-8"});
    // console.log(con);
    res.end(con);
    // res上end方法： 把数据返回给前端的方法；

}).listen(8081,function () {// Error: listen EADDRINUSE :::8080  当前端口号已经被占用；
    console.log("端口号已监听成功")
});
