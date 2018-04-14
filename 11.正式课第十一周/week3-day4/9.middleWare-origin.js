function app() {

}
// app.use;
// 事件池子
let  middlePool = [];
app.use = function (fn) {
    middlePool.push(fn);
}
app.use(function (res,req,next) {
    console.log(1);
    next();
});
app.use(function (res,req,next) {
    console.log(2);
    next();
});
app.use(function (res,req,next) {
    console.log(3);
    next();
});
let  index = 0;
function next() {
    //
    middlePool[index++](null,null,next);
};
next();


