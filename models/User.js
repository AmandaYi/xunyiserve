// 用户schema
const mongoose = require('mongoose');

// "username"  : String, 用户名
// "password" : Number,密码
// "uId" : Number, 用户id
const userSchema = new mongoose.Schema({
    "username"  : String,
    "password" : String,
    "uId" : Number,
    "nickname":String,
    "signature":String,
 
    "loverId":String
   
});
//索引
userSchema.index({ "uid": 1});

//model
const User = mongoose.model("user",userSchema);

module.exports = User;