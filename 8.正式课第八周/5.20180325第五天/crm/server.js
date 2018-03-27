// 创建服务
let http = require('http');
let  url = require('url');
let  fs = require("fs");
http.createServer(function (req,res) {
    let {pathname,query} = url.parse(req.url,true);
    let reg = /\.([0-9a-zA-Z])+$/;
    if(reg.test(pathname)){
        // 读取所有都是HTML js  css;

        let result = fs.readFileSync(`.${pathname}`);
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
        res.end(result);// 结束响应
        return;
    }
    // 1. 获取的数据的接口；
    //如果走此处的代码，那么肯定请求的是数据；不可能是文件html css；

    let   customPath = './json/custom.json';
   let con = fs.readFileSync(customPath,'utf-8');
   con = JSON.parse(con);
   // 初始化一个对象；
   let trueCon = {'code':0,'msg':"成功",data:null}
    // 1.查询所有的数据；
    if(pathname==='/getList'){
        trueCon.data = fs.readFileSync(customPath,'utf-8');
        res.writeHead(200,{'content-type':'application/json;charset=utf-8'});
        res.end(JSON.stringify(trueCon));
        return;
    }

    // 2.删除用户

    if(pathname==='/removeInfo'){

        let curId = query["id"];
        for(let i=0;i<con.length;i++){
            // console.log( typeof con[i]['id']);//"number"
            // console.log( typeof curId);// "string"
            if(curId == con[i]['id']){
                console.log(10);
                con.splice(i,1);
                break;
            }
        }
        // 把后端的数据jSON进行了修改；需要告诉前端删除成功；
        fs.writeFileSync(customPath,JSON.stringify(con),'utf-8');
        trueCon = {'code':0,'msg':"删除成功"}
        res.end(JSON.stringify(trueCon));
        return;
    }
    // 3.返回某个客户的具体信息；
    if(pathname==='/getInfo'){
        let  curId = query['id'];
        for(let i=0;i<con.length;i++){
            if(curId==con[i]['id']){
                trueCon.data = con[i];
                break;
            }
        }
        res.end(JSON.stringify(trueCon));
        return;
    }

    // 4.更新某个客户的信息

    if(pathname==='/updateInfo'){
        let  str =``;
        req.on('data',function (chunk) {
            // console.log(str);
            str+=chunk;
        });
        req.on('end',function () {
                // 当请求体数据全部拿到执行
                // console.log(str["id"]);
                let  data = JSON.parse(str);
                for(let i=0;i<con.length;i++){
                    if(con[i]['id']==data["id"]){
                        con[i] = data;
                        break;
                    }
                }
            fs.writeFileSync(customPath,JSON.stringify(con),'utf-8');
            res.end(JSON.stringify(trueCon));
        });
        return;
    }

    // 新增客户
    if(pathname==='/addInfo'){
        let str=``;
        req.on('data',function (chunk) {
            str+=chunk;
        });
        req.on("end",function () {
            let  curCus = JSON.parse(str);
            let lastindex = con.length-1;
            curCus["id"] = Number(con[lastindex]['id']) +1;
            con.push(curCus);
            fs.writeFileSync(customPath,JSON.stringify(con),'utf-8');
            res.end(JSON.stringify(trueCon));
        })
    }
}).listen(8080,function () {
    console.log("当前端口号已经监听成功");
})


