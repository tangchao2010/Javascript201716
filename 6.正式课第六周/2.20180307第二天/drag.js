function down(e) {
    e = e || window.event;
    this.mx= e.clientX;
    this.my = e.clientY;
    this.prevPosi = 0;
    this.lx = parseFloat(this.offsetLeft);
    this.ly = parseFloat(this.offsetTop);
    if(this.setCapture){
        this.setCapture();
        this.onmousemove  = move;
        this.onmouseup = up;
    }else{
        // 事件委托
        var _this = this;
        document.onmousemove = function (e) {
            move.call(_this,e);
        }
        document.onmouseup = function (e) {
            up.call(_this,e);
        }
    }
}
function move(e) {
    e = e || window.event;
    var maxL = document.documentElement.clientWidth - this.offsetWidth;
    var maxT = document.documentElement.clientHeight - this.offsetHeight;
    if(e.clientX - this.mx+this.lx > maxL){
        this.style.left = maxL + "px";
    }else if(e.clientX - this.mx+this.lx<=0){
        this.style.left = 0+"px";
    }else{
        this.style.left = e.clientX - this.mx+this.lx+ "px"
    }

    if(e.clientY -this.my + this.ly>maxT){
        this.style.top = maxT + "px";
    }else if(e.clientY -this.my + this.ly<=0){
        this.style.top = 0 + "px";
    }else{
        this.style.top = e.clientY -this.my + this.ly+ "px";
    }
    //得到当前的速度；
    // getSpeed.call(this);
    $event.selfrun(this,'selfDragStart');

}
function up() {
    if(this.releaseCapture){
        this.releaseCapture();
        this.onmousemove = null;
        this.onmouseup = null;
    }else{
        document.onmousemove  = null;
        document.onmouseup = null;

    }
    // drop.call(this);
    // fly.call(this);
    $event.selfrun(this,'selfDragMove');
}
