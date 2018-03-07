// drop  fly  getSpeed
function drop() {
    // this --> 当前元素；
    if(!this.dropSpeed){// 第一次执行drop时，给当前垂直方向速度初始化值是2；
        this.dropSpeed =2;
    }else{
        this.dropSpeed += 9.8;
        clearTimeout(this.droptimer);
    }
    // 让当前速度有个衰减指数；
    this.dropSpeed *=0.98;
    var curPo = this.offsetTop + this.dropSpeed;
    var  maxT  = document.documentElement.clientHeight - this.offsetHeight;
//        console.log(maxT);
    if(curPo >= maxT){
        // 500  -500  -492 ... 0   9.8  19.6
        this.style.top = maxT + "px";
        this.dropSpeed *= -1;
        // 只要flag连续两次++ ； 说明盒子已经在最底端；
        this.flag ++;
    }else{
        this.style.top = curPo + "px";
        this.flag = 0;
    }
    // this --> this指向外层作用域 中的this---curEle
    if(this.flag<2){
        this.droptimer  = setTimeout(handThis(this,drop),18);
    }


}

// fly : 水平方向
function fly() {
    clearTimeout(this.flytimer);
    var maxL = document.documentElement.clientWidth - this.offsetWidth;
    this.flySpeed *= 0.97;
    var  curPosi = this.offsetLeft + this.flySpeed;
    if(curPosi >= maxL){
        this.style.left = maxL + "px";
        this.flySpeed*=-1;
    }else if(curPosi<=0){
        this.style.left = 0 + "px";
        this.flySpeed *= -1;
    }else{
        this.style.left = curPosi + "px";
    }
    if(Math.abs(this.flySpeed) > 0.5){
        this.flytimer = setTimeout(handThis(this,fly),18)
    }
}

// 获取onmousemove两次执行之间的速度；
function getSpeed() {
    // 利用自定义属性来记录上次onmousemove执行时盒子的位置，用本次盒子的位置减去上次盒子 的位置，就是单位时间内盒子走过的距离；也就是盒子运动的速度
    if(this.prevPosi===0){
        // 第一次进来执行
        this.prevPosi = this.offsetLeft;
    }else{
        this.flySpeed = this.offsetLeft - this.prevPosi;
        this.prevPosi = this.offsetLeft;
    }
}
function handThis(obj,fn) {
    return function () {
        fn.call(obj)
    }
}