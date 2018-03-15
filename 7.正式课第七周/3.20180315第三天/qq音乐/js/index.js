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
    setInterval(computedTime,1000);
}
console.log(musicAudio.duration);
function formatTime(time) {
    var  min = Math.floor(time/60);
    var  sec = Math.floor(time-min*60);
    min < 10? min = "0"+ min : null;
    sec <10 ? sec = "0" + sec : null;

    return min + ":" + sec;
}


$musicBtn.tap(function () {
    if(musicAudio.paused){
        musicAudio.play();
        $musicBtn.addClass("select");
        return;
    }
    musicAudio.pause();
    $musicBtn.removeClass("select");
});
function computedTime() {
    $duration.html(formatTime(musicAudio.duration));
    console.log(musicAudio.duration);
    console.log(musicAudio.currentTime);
}











