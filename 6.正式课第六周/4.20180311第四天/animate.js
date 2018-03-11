function drop() {
    // this--> curEle

    // 初始化初速度
    if(!this.dropSpeed){
        // 第一次进来执行
        this.dropSpeed = 2;
    }else{
        this.dropSpeed += 9.8;//
        clearTimeout(this.droptimer);
    }
    this.dropSpeed *=0.98;
    if(this.offsetTop + this.dropSpeed > this.maxT-0.5){
        this.style.top = this.maxT-0.5 + "px";
        this.dropSpeed *= -1;
        this.flag ++;
    }else{
        this.style.top = this.offsetTop + this.dropSpeed + "px";
        this.flag = 0;
    }

    if(this.flag<2){
        this.droptimer = setTimeout(drop.myBind(this),18);
    }
}

function fly() {
    clearTimeout(this.flytimer);
    var maxL = document.documentElement.clientWidth - this.offsetWidth;
    this.flySpeed *=0.99;
    if(this.offsetLeft + this.flySpeed>maxL){
        this.style.left = maxL + "px";
        this.flySpeed *= -1;
    }else if(this.offsetLeft + this.flySpeed <0){
        this.style.left = 0 + "px";
        this.flySpeed *= -1;
    }else{
        this.style.left = this.offsetLeft + this.flySpeed + "px";
    }
    if(Math.abs(this.flySpeed)> 0.5) {
        this.flyTimer = setTimeout(fly.myBind(this),18);
    }
}

function getSpeed() {
    // onmousemove 大概15毫秒左右执行一次；相邻量词onmousemove执行的位置的坐标差，可以近似认为当前时刻的速度

    if(!this.prevPosi){
        this.prevPosi = this.offsetLeft;
    }else{
        this.flySpeed = this.offsetLeft - this.prevPosi;
        this.prevPosi = this.offsetLeft;
    }

}
