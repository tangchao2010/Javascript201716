function down(e) {
    e = e || window.event;
    this.mx = e.clientX;
    this.my = e.clientY;
    this.strX = this.offsetLeft;
    this.strY = this.offsetTop;
    this.maxT = document.documentElement.clientHeight - this.offsetHeight;
    // IE  火狐
    if(this.setCapture){
        this.setCapture();
        this.onmousemove = move;
        this.onmouseup = up
    }

    // 事件委托
    document.onmousemove = move.myBind(this)
    document.onmouseup = up.myBind(this);
}
function move(e) {
    e = e || window.event;
    var changeL = e.clientX - this.mx;
    var changeT = e.clientY - this.my;
    this.style.left = this.strX + changeL + "px";
    this.style.top = this.strY + changeT + "px";
    getSpeed.call(this);
    // 发布： 触发selfanimatestart这个自定义事件池中的方法
    $event.selfRun.call(this,'selfanimatestart');
}
function up() {
    if(this.releaseCapture){
        this.releaseCapture();
        this.onmousemove = null;
        this.onmouseup= null;
        return;
    }
    document.onmousemove = null;
    document.onmouseup = null;
    $event.selfRun.call(this,'selfanimatestarting');
}