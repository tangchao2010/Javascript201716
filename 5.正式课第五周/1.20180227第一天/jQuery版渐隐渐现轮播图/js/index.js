// 通过jQuery获取的元素，变量前加$;
var $outer = $("#outer");// []
//var outer = document.getElementById("outer");// {}
var outer = $("#outer")[0];
var $swip = $(".swip");
// 通过jQuery选择器获取到的元素实例，不具有映射的特征；
var $focus = $("#focus");
// console.log($("ul li"));
// console.log(document.getElementsByTagName("li"));
var $oImgs;
var maxLength;

// 请求数据

$.ajax({
    url:"./data.json",// 路径
    type:"get",// 请求方式
    async:false,// 同步异步  默认是异步（true）  同步是false
    // dataType:"json",
    // data:{
    //     uername:$("input").val(),
    //     password:"dhsddhs123"
    // },
    success:function (data) {
        // data : 请求到的数据
        // console.log(data);
        bindData(data);
    }
});
// 绑定数据
function bindData(data) {
    var imgStr = "";
    var liStr = "";
    // $.each : jQuery 的私有属性  遍历数组和对象
    // $.each([]/{},function(index,item){})
    $.each(data, function (index) {
        //
        imgStr += '<img data-src=' + data[index].img + '>';
        liStr += '<li></li>'
    });
    $swip.html(imgStr);
    $focus.html(liStr);
    $("ul li").eq(0).addClass("selected");
    $oImgs = $("#outer img");
    maxLength = $oImgs.length - 1;
    delayImg();
}
function delayImg() {
    // 通过jQuery的实例调用，调用的加jQuery原型上方法
    $oImgs.each(function (index) {
        //console.log(this);// 当前每一张图片
        // console.log(index);
        var that = this;
        var  trueAddress = $(this).attr("data-src");
        var  newImg = new Image;// 原生创建img;
        newImg.src = trueAddress;
        $(newImg).load(function () {
            // 如果图片路径地址真实存在，那么会执行这个回调函数
            that.src = trueAddress;
            index === 0?$(that).fadeIn():null;
            newImg = null;
        })
    });
    outer.step = 0;
    outer.timer = setInterval(autoMove,2000);
}
function autoMove(n) {
    outer.step++;
    typeof n !== "undefined"?outer.step = n:null;
    outer.step>maxLength ?outer.step =0:null;
    // 停止正在进行的动画
    $oImgs.stop().eq(outer.step).fadeIn(300).siblings().fadeOut();
    $("ul li").eq(outer.step).addClass("selected").siblings().removeClass("selected");
}
$("ul li").mouseover(function(){
    autoMove($(this).index())
})
$("#outer").hover(function(){
    $(this).children("a").show();
    clearInterval(outer.timer);
},function(){
    $(this).children("a").hide();
        outer.timer = setInterval(autoMove,2000);
})
$("#right").click(function(){
    autoMove()
});
$("#left").click(function(){
    outer.step-=2;
    if(outer.step<-1){
        outer.step = maxLength-1;
    }
    autoMove();
})