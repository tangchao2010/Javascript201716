let  url = require("url");
// console.log(url);

// 这个模块给咱们提供一些操作url地址的一些方法；
let  str = 'http://www.baidu.com:8080/user/info/?username=zf&password=666888#video';

console.log(url.parse(str,true));
let  {pathname}=url.parse(str,true);
// url.parse()  第一个参数是地址，第二个参数不传默认是false；true ： 把query的属性值变成对象；
// Url {
//     protocol: 'http:',   // 协议
//         slashes: true,   // 斜杠
//         auth: null,     作者
//         host: 'www.baidu.com', 域名+端口号
//         port: "8080",  端口号
//         hostname: 'www.baidu.com',域名
//         hash: '#video',  哈希值
//         search: '?username=zf&password=666888', ？ + 参数
//         query: 'username=zf&password=666888', 参数
//         pathname: '/',  // 路径
//         path: '/?username=zf&password=666888',  路径+ 参数
//         href: 'http://www.baidu.com/?username=zf&password=666888#video' }// url
