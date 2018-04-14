let express = require('express');
let app = express();
app.listen(8080);
// app.use('/user',function (req,res,next) {
//     next()
// })

// express.static :静态资源中间件；
app.use(express.static('./dist'));
// app.get('/welcome',function (req,res) {
//     res.end();
// });