let  path = require('path');
console.log(__dirname)//   当前文件上级目录的绝对路径
// E:\珠峰培训\课件\2017第十六期\Javascript201716\10.正式课第十周\week2-day3
console.log(__filename); // 当前文件的绝对路径
// E:\珠峰培训\课件\2017第十六期\Javascript201716\10.正式课第十周\week2-day3\a.txt
// path.join(); 把两个路径拼接到一起
console.log(path.join(__dirname,'./a.txt','./b.txt'));
// resolve : 默认当前的文件上级目录绝对路径和新的参数拼接到一起；
console.log(path.resolve('./a.txt'));


