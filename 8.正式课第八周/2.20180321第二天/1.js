
function queryUrl(url) {
    // 在node中，document不存在这个方法；
    var  a = document.createElement("a");
    a.href = url;
    // a标签search属性值会自动过滤域名留下参数；
    var  str = a.search;
    var newStr =str.substring(1, str.lastIndexOf("?"));
    var  ary =newStr.split("&");
    var  a = [];
    for(var i=0;i<ary.length;i++){
        var  cur = ary[i];
        var  arr = cur.split("=");
        var obj = {};
        obj[arr[0]] = arr[1];
        a.push(obj);
    }
};
// module.exports : 把当前模块导出；
module.exports.queryUrl = queryUrl;