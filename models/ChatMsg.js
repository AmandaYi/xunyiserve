const mongoose = require('mongoose');
// 聊天结构
// 用户名,时间,文本,图片
const MsgSchema = new mongoose.Schema({
    // roomId: String,
    userId: String,
    timeStamp: String,
    text: String,
    imgUrl: String
})

module.exports = MsgSchema