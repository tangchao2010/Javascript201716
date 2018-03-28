// 请求数据 ： ajax  JSONP   link  src  浏览器可以  form表单
function ajax({url="",type="get",dataType='json'}) {
    return  new Promise(function (resolve,reject) {
        var  xhr = new  XMLHttpRequest();
        xhr.open(type,url,true);
        xhr.onload = function () {
            //当状态码等于4时 ，执行此函数；
            // 请求成功
            resolve(xhr.responseText);

        }
        xhr.onerror = function (err) {
            reject(err);
        }
        xhr.send();
    })
}

