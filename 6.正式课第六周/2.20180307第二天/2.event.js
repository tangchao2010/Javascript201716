~function () {
    Function.prototype.myBind = function () {
        var arg1 = arguments[0];
        var _this = this;
        var a = [].slice.call(arguments,1);
        return function () {
            var arg2 = [].slice.call(arguments);
            var cur = a.concat(arg2);
            _this.apply(arg1,cur);
        }
    }
    function on(curEle,type,fn) {
        if(curEle.addEventListener){
            curEle.addEventListener(type,fn,false);
            return;
        }
        if(!curEle['pool'+type]){
            curEle['pool'+type] = [];
            document.body.attachEvent('on'+type,run.myBind(curEle));
        };
        var  ary = curEle['pool'+ type];
        for(var i=0;i<ary.length;i++){
            if(fn === ary[i]){
                return;
            }
        }
        ary.push(fn);
    }
    function run(e) {
        e.target = e.srcElement;
        e.pageX = e.clientX + document.body.scrollLeft;
        e.pageY = e.clientY + document.body.scrollTop;
        e.stopPropagation = function () {
            e.cancelBubble = true;
        }
        e.preventDefault = function () {
            e.returnValue  = false;
        }
        var a = this['pool'+e.type];
        for(var i=0;i<a.length;i++){
            if(ary[i]===null){
                ary.splice(i,1);
                i--;
                continue;
            }
            a[i].call(this,e);
        }
    }
    function off(curEle,type,fn) {
        var  ary = curEle['pool'+type];
        for(var i=0;i<ary.length;i++){
            if(ary[i] === fn){
                ary[i] = null;
                return;
            }
        }
    };
    window.$event = {
        on : on,
        off : off
    }
}()
