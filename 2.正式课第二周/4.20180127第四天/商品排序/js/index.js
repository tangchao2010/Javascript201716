// ajax : 和后端交互
var  data;
var oUl = document.getElementById("list");
var navs = document.getElementsByTagName("a");
var  oLis = oUl.getElementsByTagName("li");
// 1. 创建一个ajax对象

var xhr = new  XMLHttpRequest();// ajax 对象
// 2. 打开相应路径
// get  post
xhr.open("get","json/product.json",false);//同步；
// 3. 监听
xhr.onreadystatechange = function () {
    if(xhr.readyState===4 && /^2\d{2}$/.test(xhr.status)){
        data=utils.toJSON(xhr.responseText);
    }
};
// 4.发送请求
xhr.send(null);
// console.log(data);
//2.绑定数据
var  str = ``;
for(var i=0;i<data.length;i++){
    var cur = data[i];
    str += `<li data-time="${cur.time}"  data-hot="${cur.hot}" data-price="${cur.price}">
                <img src="${cur.img}" alt="">
                <span>${cur.title}</span>
                <span>${cur.time}</span>
                <span>${cur.hot}</span>
                <span>${cur.price}</span>
            </li>`
};
oUl.innerHTML = str;

// 3.给每一个a标签绑定点击事件，使其可以进行排序；
for(var i=0;i<navs.length;i++){
    var cur = navs[i];
    //自定义属性，存储当前被点击的a的索引；
    cur.index = i;
    cur.flag = -1;
    cur.onclick = function () {
        this.flag*=-1;
        // 改变sortList 方法中的this，让其指向被点击的每一个a标签；
        sortList.call(this);
    }
};

// 4.排序功能

function sortList() {
    // console.log(2);
    //把获取到类数组集合转换成一个真正的数组
    // console.log(this);//指向当前被点击的a标签；
    var  that = this;
    var  ary = utils.toArray(oLis);
    var  dataAry = ["data-time","data-hot","data-price"];
    ary.sort(function(a,b){
        // a,b代表ary中的每一个li;
        // getAttribute : 获取当前元素自定义属性的属性值；
        // getAttribute 获取不到属性名对应值返回null；
        // 当前回调函数中的this指向window；
        var  cur = a.getAttribute(dataAry[that.index]);
        var nex = b.getAttribute(dataAry[that.index]);
        if(that.index === 0){
            // 如果点击时间排序，去掉时间中的横杠；
            cur = cur.replace("-","").replace("-","");
            nex = nex.replace("-","").replace("-","");
        }
        // debugger
        return (cur-nex)*that.flag;
    });
    // 断点： 让代码停止到这一行；
    var frg = document.createDocumentFragment();
    for(var i=0;i<ary.length;i++){
        var curLi = ary[i];
        frg.appendChild(curLi);
    };
    oUl.appendChild(frg);
    frg = null;
    // 把ary中li放进页面中
}

// 1.请求数据
// 2.绑定数据
// 3. 循环绑定点击事件
// 4. 排序： 1) sort  2) 把排好的顺序li放回页面；






