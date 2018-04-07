let fs = require('fs')
function copy(source,target) {
    let  rs = fs.createReadStream(source);
    let  ws = fs.createWriteStream(target);
    rs.pipe(ws);// pipe  会默认调用end；
    //
}
copy('./2.txt','3.txt');
