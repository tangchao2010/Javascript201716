var  $musicAudio = $("#musicAudio"),
    musicAudio = $musicAudio[0],
    $musicBtn = $(".musicBtn"),
    $header = $(".header"),
    $main = $(".main"),
    $wrapper = $(".wrapper"),
    $footer = $(".footer"),
    $current = $footer.find(".current"),
    $duration = $footer.find(".duration"),
    $already = $footer.find(".already");
var autoTimer;
function computedMain() {
    var  winH = document.documentElement.clientHeight;
    var  rem   = parseFloat(document.documentElement.style.fontSize);
    var  hei = winH - $header[0].offsetHeight - $footer[0].offsetHeight - rem*0.6;
    $main.css("height",hei/rem + "rem");
}
computedMain();
window.addEventListener('resize',computedMain);
//  1. 请求数据；
$.ajax({
    url:"json/lyric.json",
    type:"get",
    async:false,
    success:function (data) {
        // 请求成功之后，进行数据绑定；
        bindHtml(data.lyric)
    }
})

// 2.绑定数据
function bindHtml(data) {

    data=data.replace(/&#(\d+);/g,function(res,a){
        // console.log(res);
        switch (parseFloat(a)){
            case 32:
                return ' ';
                break;
            case 40:
                return "(";
                break;
            case 41:
                return ")";
                break;
            case 45:
                return '-';
        }
        return res;
    });
    // 存放处理后的数据；
    var  ary = [];
    data.replace(/\[(\d+)&#58;(\d+)&#46;(?:\d+)\]([^&#]+)(?:&#10)/g,function (res,min,sec,val) {
        ary.push({
            minute:min,
            second:sec,
            value:val
        })
    })
    var str = ``;
    for(var i=0;i<ary.length;i++){
        var item = ary[i];

        str+=`<p data-min="${item.minute}" data-sec="${item.second}">${item.value}</p>`
    }
    $wrapper.html(str);
    musicAudio.play();
    $musicBtn.addClass("select");
}

musicAudio.addEventListener('canplay',function () {
    autoTimer=setInterval(computedTime,1000);
})

function formatTime(time) {
    var  min = Math.floor(time/60);
    var  sec = Math.ceil(time-min*60);
    min < 10? min = "0"+ min : null;
    sec <10 ? sec = "0" + sec : null;

    return min + ":" + sec;
}


$musicBtn.tap(function () {
    if(musicAudio.paused){
        musicAudio.play();
        $musicBtn.addClass("select");
        clearInterval(autoTimer)
        return;
    }
    musicAudio.pause();
    $musicBtn.removeClass("select");
    autoTimer=setInterval(computedTime,1000);
});
var  curTop = 0;
var  step = 0;
function computedTime() {
    // 在音频的标签对象上有currentTime属性，记录当前的播放时间；
    // duration  : 是代表当前音频一共多少秒；

    var curTime = musicAudio.currentTime;
    var  durTime = musicAudio.duration;
    if(curTime> durTime){
        clearInterval(autoTimer);
        $musicBtn.removeClass("select");
        $already.css("width","100%");
        return;
    }
    $already.css("width",curTime/durTime*100 + "%");
    var  cur = formatTime(curTime)
    $duration.html(formatTime(durTime));
    $current.html(cur);
    var  ary = cur.split(":")
    var  min =ary[0];
    var sec = ary[1];
    // filter : 通过属性过滤；
    // 获取对应的分钟以及秒的p标签；
    // console.log($wrapper.find("p"));
    // filter : 如果是行内属性，需要加上中括号；
    //  data-min = "00"
    // data-min = 00
    var curP = $wrapper.find("p").filter('[data-min="'+min+'"]').filter('[data-sec="'+sec+'"]');
    if(curP.length>0){
        curP.addClass("select").siblings().removeClass("select");
        step ++;
        if(step>=4){
            curTop-= .84;
            $wrapper.css("top",curTop+ "rem");
        }
    }



    // 获取对应时间下的p标签；p标签的行内属性，data-min；data-sec;













}











