var Bmob = require('../../utils/bmob.js');
var common = require('../../utils/common.js');
var app = getApp()
Page({
    data: {
        userInfo: {},
    },
    onLoad: function () {
        var that = this
        //调用应用实例的方法获取全局数据
        app.getUserInfo(function (userInfo) {
            console.log(userInfo)
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        })
    },
    sendSms: function (event) {
        var phone = event.detail.value.phone;
        Bmob.Sms.requestSmsCode({ "mobilePhoneNumber": phone }).then(function (obj) {
            common.showTip('发送成功' + "smsId:" + obj.smsId);
        }, function (err) {
            common.showTip('发送失败' + err);
        });

    }
})