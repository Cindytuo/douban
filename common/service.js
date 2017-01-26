const face = require('./face');
const fake = require('./fake');
const Promise = require('../util/es6-promise.min').Promise;
var get = false;//用于假数据
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

var requestFakeApi = function (url, params) {
    let promise = new Promise((resolve, reject)=> {
        let success = setTimeout(()=> {
            resolve({"data": url});
            get = true;
        }, 2000);
        let error = setTimeout(()=> {
            if (!get) {
                reject({"data": {"code": 333, "msg": "访问错误"}});
            }
        }, 4000);
    });
    extendPromise(promise);
    return promise;
}

var extendPromise = function (promise) {
    promise.success = function (fn) {
        promise.then((response)=> {
            fn(response);
        });
        return promise;
    };
    promise.error = function (fn) {
        promise.then(null, (error)=> {
            fn(error);
        });
        return promise;
    }
};

var getIntheaters = function (param) {
    let city = (param.city == undefined) ? '北京' : param.city;
    let start = (param.start == undefined) ? 0 : param.start;
    let count = (param.count == undefined) ? 20 : param.count;
    return requestApi(face.intheaters, {'city': city, 'start': start, 'count': count});
};

var getTop = function (param) {
    let city = (param.city == undefined) ? '北京' : param.city;
    let start = (param.start == undefined) ? 0 : param.start;
    let count = (param.count == undefined) ? 20 : param.count;
    return requestApi(face.top, {'city': city, 'start': start, 'count': count});
};

var getOneSubject = function (param) {
    return requestApi(`${face.subject}${param.id}`);
};

var getReviews = function () {
    return requestFakeApi(fake.getReview, null);
};

module.exports = {
    getIntheaters: getIntheaters,
    getTop: getTop,
    getReviews: getReviews,
    getOneSubject: getOneSubject
};