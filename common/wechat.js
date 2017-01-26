const face = require('./face');
const Promise = require('../util/es6-promise.min').Promise;

var extendPromise = function (promise) {
    promise.success = function (fn) {
        promise.then((response)=> {
            fn(response);
        });
        return promise;
    };
    promise.fail = function (fn) {
        promise.then(null, (error)=> {
            fn(error);
        });
        return promise;
    };
};

var login = function () {
    let promise = new Promise((resolve, reject)=> {
        wx.login({
            success: function (res) {
                resolve(res);
            },
            fail: function (error) {
                reject(error);
            }
        });
    });
    extendPromise(promise);
    return promise;
};

var loginGetOpenId = function () {
    let wxLogin = function () {
        let promise = new Promise((resolve, reject)=> {
            wx.login({
                success: function (res) {
                    resolve(res);
                },
                fail: function (error) {
                    reject(error);
                }
            });
        });
        return promise;
    };
    let serveLogin = function (arg) {
        let promise = new Promise((resolve, reject)=> {
            wx.request({
                url: 'localhost:3000/wechat',
                data: arg.code,
                success: function (res) {
                    resolve(res);
                },
                fail: function (error) {
                    reject(error);
                }
            });
        });
        return promise;
    };
    return wxLogin().then((res)=> {
        extendPromise(serveLogin(res.code));
        return serveLogin(res.code);
    }, (error)=> {
        extendPromise(wxLogin());
        return null;
    });
};

var getUserInfo = function () {
    let promise = new Promise((resolve, reject)=> {
        wx.getUserInfo({
            success: function (res) {
                let userInfo = res.userInfo
                // var nickName = userInfo.nickName
                // var avatarUrl = userInfo.avatarUrl
                // var gender = userInfo.gender //性别 0：未知、1：男、2：女
                // var province = userInfo.province
                // var city = userInfo.city
                // var country = userInfo.country
                resolve(res);
            },
            fail: function (error) {
                reject(error);
            }
        });
    });
    extendPromise(promise);
    return promise;
};

var getLocation = function () {
    let promise = new Promise((resolve, reject)=> {
        wx.getLocation({
            type: 'wgs84',
            success: function (res) {
                // var latitude = res.latitude//纬度
                // var longitude = res.longitude//经度
                // var speed = res.speed//速度
                // var accuracy = res.accuracy//位置精确度
                resolve(res);
            },
            fail: function (error) {
                reject(error);
            }
        });
    });
    extendPromise(promise);
    return promise;
};

var scanCode = function () {
    let promise = new Promise((resolve, reject)=> {
        wx.scanCode({
            success: function (res) {
                resolve(res);
            },
            fail: function (error) {
                reject(error);
            }
        });
    });
    extendPromise(promise);
    return promise;
};

module.exports = {
    login: login,
    loginGetOpenId: loginGetOpenId,
    getUserInfo: getUserInfo,
    getLocation: getLocation,
    scanCode: scanCode
};