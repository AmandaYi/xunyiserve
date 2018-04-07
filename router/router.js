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
                 
                // (err) => {
                // if (err) {
                //     console.log(`${userInfo.username}注册失败`);
                //     return;
                // }

                // User.findOne({ username: userInfo.username }, (err, user) => {
                //     if (err) return handleError(err);

                //     // console.log(user);
                //     // console.log(user._id);
                //     res.json({
                //         state: 1,
                //         userId: user._id,
                //         data: {
                //             stateText: '注册成功！'
                //         }
                //     })
                //     console.log(`${userInfo.username}注册成功`);
                // });




            // }
        )
        }
    })
}


exports.login = (req, res, next) => {

    const userInfo = req.body;

    User.findOne({ username: userInfo.username ,password:userInfo.password}, (err, user) => {
        console.log(req.body);
        if (err) {
            console.log("数据库异常");
            return;
        }


        if (!user) {

            res.json({
                state:-1,

                data: {
                    stateText: '用户名或密码错误'
                }
            })

        } 
        else  {
            res.json({
                state: 1,
                uesrId: user._id,
                data: {
                    stateText: '登陆成功'
                }
            })
        }

    })
}

 




