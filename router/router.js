const User = require("../models/User.js");


// 注册用户

exports.resigter = (req, res, next) => {

    const userInfo = req.body;

    User.findOne({ username: userInfo.username }, (err, user) => {
        console.log(req.body);
        if (err) {
            console.log("数据库异常");
            return;
        }
        if (user) {
            res.json({
                state: 0,
                data: {
                    stateText: '用户已存在!'
                }
            })
        } else {

            let user = new User(userInfo);
            user.save(

                (err) => {
                    if (err) {
                        console.log(`${userInfo.username}注册失败`);
                        return;
                    }

                    User.findOne({ username: userInfo.username }, (err, user) => {
                        if (err) return handleError(err);

                        // console.log(user);
                        // console.log(user._id);
                        res.json({
                            state: 1,
                            userId: user._id,
                            data: {
                                stateText: '注册成功！'
                            }
                        })
                        console.log(`${userInfo.username}注册成功`);
                    });




                }
            )
        }
    })
}


exports.login = (req, res, next) => {

    const userInfo = req.body;

    User.findOne({ username: userInfo.username, password: userInfo.password }, (err, user) => {
        console.log(req.body);
        if (err) {
            console.log("数据库异常");
            return;
        }


        if (!user) {

            res.json({
                state: -1,

                data: {
                    stateText: '用户名或密码错误'
                }
            })

        }
        else {
            res.json({
                state: 1,
                userId: user._id,
                data: {
                    stateText: '登陆成功'
                }
            })
        }

    })
}


// 查询用户的信息
exports.searchUserInfo = (req, res, next) => {

    const userInfo = req.body;
console.log(userInfo);
    User.findOne({ _id: userInfo.userId }, (err, user) => {
        if (err) {
            console.log("查询数据失败" + userInfo.userId);
            return;
        }
        res.json({
            code: 0,
            userInfo: user
        })
    })


}
// 更新用户的信息

exports.updateUserInfo = (req, res, next) => {

    const userInfo = req.body;
    console.log(userInfo.userId)


    // 原数据字段值
    var oldValue = { _id: userInfo.userId };

    // 多条件更新
    var newData = {
        $set: {

            nickname: userInfo.nickname,
            signature: userInfo.signature,       
            loverId: userInfo.loverId

        }
    };

    User.update(oldValue, newData, (err, result) => {
        if (err) {
            console.log(err);
        } else {
           res.json({
               code:0,
               msg:"更新成功"
           })
        }
        // db.close();
    });


}




