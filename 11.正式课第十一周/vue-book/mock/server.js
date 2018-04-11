//   vue-book 既写服务端，又写前端；
let http = require('http');
let fs = require('fs');
let url = require('url');

let slide = require('./sliders');
http.createServer(function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By", ' 3.2.1')
  if (req.method == "OPTIONS") return res.end();
  let {pathname,query} = url.parse(req.url,true);
  if (pathname === '/sliders') {
    res.setHeader('content-type', 'application/json;charset=utf-8');
    return res.end(JSON.stringify(slide));
  }

  if(pathname==='/hot'){
    fs.readFile('./book.json','utf8',function (err,data) {
       res.setHeader('content-type','application/json;charset=utf-8');
      data =  JSON.parse(data).reverse().slice(0,6)
       return  res.end(JSON.stringify(data));
    })
  }

  // 获取所有的图书数据
  if(pathname==='/books'){
    fs.readFile('./book.json','utf8',function (err,data) {
      res.setHeader('content-type','application/json;charset=utf-8');
      return  res.end(data);
    })
  }

  if(pathname==='/delete'){
    let  id = query.id;
    fs.readFile('./book.json','utf8',function (err,data) {
      res.setHeader('content-type','application/json;charset=utf-8');
      let  newData = JSON.parse(data);
      newData = newData.filter(item=>item.bookId !=id);

      fs.writeFile('./book.json',JSON.stringify(newData),function () {
        return  res.end();
      })
    })
  }
}).listen(3001);
