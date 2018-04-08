
// 引入express
const express = require("express");
const app = express();
var cors = require('cors')
 
var bodyParser = require("body-parser");
 
// use body parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({
extended: true
}));



//cors跨域
app.use(cors())
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

 
// 监听端口
app.listen(3000);

