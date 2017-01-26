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

var requestApi = function (url, params) {
    let promise = new Promise((resolve, reject)=> {
        wx.request({
            url: url,
            data: Object.assign({}, params),
            header: {'Content-Type': 'json'},
            success: (response)=> {
                resolve(response);
            },
            fail: (error)=> {
                reject(error);
            }
        });
    });
    extendPromise(promise);
    return promise;
};

var connect = function () {
    return requestApi(face.testwechat, null);
};

module.exports = {
    connect: connect
};