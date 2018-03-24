function fn() {
    console.log("去吃饭");
}
function buy() {
    console.log("去买菜")
}
// module.exports : 把当前模块的方法提供出去；
module.exports.fn = fn;
module.exports.buy= buy;


module.exports = {
    fn:fn,
    buy:buy
}
// 必须把方法暴露出去；