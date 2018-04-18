
// 引入express
const express = require("express");
const app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);
 

var bodyParser = require("body-parser");

var cors = require('cors')
app.use(cors())
// use body parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({
    extended: true
}));



//cors跨域
 
// 引入路由
const router = require("./router/router");
// mongoose
const db = require("./models/db.js");

//路由表
//执行注册，Ajax服务
app.post("/api/register", router.resigter);
//执行登录，Ajax服务
app.post("/api/login", router.login);

// 查询个人信息
app.post("/api/searchuser", router.searchUserInfo);
// 修改个人信息       
app.post("/api/updateuser", router.updateUserInfo);


// 新闻列表
app.get("/api/knowledges")
// 新闻详细内容
app.get("/api/knowledge/:id")
// 聊天室
io.on('connection', (socket) => {
   
    console.log("来了")

    // socket.on('disconnect', function(){
    //  console.log('user disconnected');
    // });
  
    socket.on('chat-msg', (option) => {
        console.log(option)
    });

    // socket.on('add-message', (message) => {
    //  io.emit('message', {type:'new-message', text: message});  
    // });
});

// 聊天机器人

// 定位功能

// 监听端口
app.listen(3000);

