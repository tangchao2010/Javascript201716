// 请求数据
var data;
var  outer = document.getElementById("outer");
var  swiper = document.getElementById("swiper");

var oDivs = swiper.getElementsByTagName("div");
var oUl =document.getElementById("focus");
var oLis = document.getElementsByTagName("li");

var left = document.getElementById("left");
var right = document.getElementById("right");



var xhr = new XMLHttpRequest();
xhr.open("get","./json/banner.json",false);
xhr.onreadystatechange = function () {
    if(xhr.readyState===4&&/^2\d{2}$/.test(xhr.status)){
        data = utils.toJSON(xhr.responseText)
    }
}
xhr.send(null);
console.log(data);

// 2.绑定数据
function bindData() {
    var  str = ``;
    var strLi = ``;
    for(var i=0;i<data.length;i++){
        var cur = data[i];
        str+=`<div><img src="${cur.img}" alt=""></div>`;
        strLi+=`<li></li>`
    }
    swiper.innerHTML = str;
    oUl.innerHTML = strLi;
    // 深度克隆
    swiper.appendChild(oDivs[0].cloneNode(true));
    oLis[0].className = "selected";
}
bindData();
var oDivWidth = oDivs[0].offsetWidth;
var timer=setInterval(autoMove,2000);
//自动轮播
var  step = null;// 记录当前第几张

function autoMove(n) {
    step++;
    typeof n==="number"?step = n:null;
    if(step===5){
        utils.css(swiper,"left",0);
        step=1;
    }
    zfAnimate(swiper,{left:step*-oDivWidth},300);
    changeTip(step);
}
function changeTip(n) {
    // console.log(oLis[n]);
    // 1
    for(var i=0;i<oLis.length;i++){
        i===n?utils.addClass(oLis[i],"selected"):utils.removeClass(oLis[i],"selected");
        // n 等于4 ，说明当前是显示的第五张，立即让第一个新增class
        n === 4?utils.addClass(oLis[0],"selected") :null;
    }
}

outer.onmouseover = function () {
    left.style.display= "block";
    right.style.display = "block";
    clearInterval(timer);
}
outer.onmouseout = function () {
    left.style.display= "none";
    right.style.display = "none";
    timer=setInterval(autoMove,2000);
}
// 给所有的li 绑定点击事件
for(var i=0;i<oLis.length;i++){
    oLis[i].index = i;
    oLis[i].onclick = function () {
        autoMove(this.index);
    }
}
right.onclick = function () {
    autoMove()
}
left.onclick = function () {
    step--;
    if(step===-1){
        // debugger
        utils.css(swiper,{left:(oLis.length)*-oDivWidth});
        zfAnimate(swiper,{left:(oLis.length-1)*-oDivWidth},300);
        //让显示第三张
        step=3;
        changeTip(step);
        return;
    }
    zfAnimate(swiper,{left:step*-oDivWidth},300)
    changeTip(step);
}