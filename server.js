const express = require('express');
const server = express();
const ejs = require('ejs');




// 设置模板引擎
server.set('view engine', 'html');
// 修改模板默认目录(默认目录是views，更改为www)
server.set('views', './www');
server.engine('html', ejs.__express);

// 响应静态资源
server.use('/public', express.static('public'));

// 响应首页
server.use('/', (req, res) => {
    res.sendFile(__dirname + '/www/index.html');
});


server.listen(9511, 'localhost', (error) => {
    if (!error) {
        console.log('服务器启动成功');
    } else {
        console.log('服务器启动失败');
    }
});

module.exports = server;