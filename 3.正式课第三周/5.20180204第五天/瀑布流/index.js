// 1.获取数据
var  data;
var  oUls = document.getElementsByTagName("ul");
var oUlAry = utils.toArray(oUls);
var winH = utils.win("clientHeight");
  //1) 创建ajax对象
var  xhr = new XMLHttpRequest();
// 2) 打开路径
xhr.open("get","data.txt",false);
// 3) 监听
xhr.onreadystatechange = function () {
    if(xhr.readyState===4&&/^2\d{2}$/.test(xhr.status)){
        data = utils.toJSON(xhr.responseText);
    }
};
// 4.发送请求
xhr.send(null);// 不需要传参数，给null；
// 2.绑定数据
function bindData() {
    // document.createElement()
    for(var i=0;i<50;i++){
        // 每循环一次，产生一个0-7的随机数，去获取随机的数据
        var  round = Math.round(Math.random()*7);
        var curData = data[round];
        // 创建一个li标签
        var oLi = document.createElement("li");
        //  给每一个li创建a标签；
        var cura = document.createElement("a");
        cura.innerHTML = "采集";
        cura.href = "javascript:;";
        oLi.appendChild(cura);
        // 给li中新增一个img标签；
        var curimg= document.createElement("img");
        // 把当前图片的真实路径存储到图片一个自定义属性上；
        curimg.setAttribute("data-real",curData.src);
        // 给每一张图片随机产生一个200-350之间的高度
        curimg.style.height = Math.round(Math.random()*(350-200)+200)+ "px";
        // 把图片放进li中
        oLi.appendChild(curimg);
        // 创建p标签
        var curp = document.createElement("p");
        curp.innerHTML = curData.title;
        oLi.appendChild(curp);
        oUlAry.sort(function (a,b) {
            // 按照每一个ul的scrollHeight 进行排序
            return  a.scrollHeight - b.scrollHeight;
        });
        oUlAry[0].appendChild(oLi);
    }
}
bindData();

var imgs = document.getElementsByTagName("img");
window.onscroll = function () {
    delayImg();
    var curScrollTop = utils.win("scrollTop");
    var allH = utils.win("scrollHeight");
    if(curScrollTop + winH + 300>allH){
        bindData();
    }
}
function delayImg() {
    // 循环所有的图片，校验当前图片是否需要加载
    for(var i=0;i<imgs.length;i++){
        checkImg(i)
    }
}
delayImg()
// 获取浏览器可视窗口的高度

function checkImg(i) {
    var  curImg = imgs[i];
    if(curImg.load){
        return;
    }
    // 获取当前图片的距离body的上偏移
    var  curT = utils.offset(curImg).top;
    var curH = curImg.offsetHeight;
    var  scrollT = utils.win("scrollTop");

    if(winH + scrollT > curT + curH){
        var  trueAdd = curImg.getAttribute("data-real");
        var img = document.createElement("img");
        img.src = trueAdd;
        img.onload = function () {
            curImg.src=trueAdd;
            curImg.load = true;
            fadeIn(curImg);
            img = null;
        }
    }
}
function fadeIn(curImg) {
    utils.css(curImg,"opacity",0.3);
    var timer =setInterval(function () {
        var  curOpa =utils.css(curImg,"opacity");
        curOpa+=0.1;
        if(curOpa>=1){
            utils.css(curImg,"opacity",1);
            clearInterval(timer);
            return;
        }
        utils.css(curImg,"opacity",curOpa);
    },100)
}

//当