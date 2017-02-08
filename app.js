App({
    onLaunch: function() {
        console.log('onLaunch');
        // Do something initial when launch.
    },
    onShow: function() {
        console.log('onShow');
        // Do something when show.
    },
    onHide: function() {
        console.log('onHide');
        // Do something when hide.
    },
    onError: function(msg) {
        console.log(msg)
    },
    globalFunc: {
        drawStar: function(value) {
            let starsNum = Math.round(value / 5);
            let starsArray = [];
            starsArray.length = starsNum;
            return starsArray;
        }
    },
    globalData: {
        load: '正在加载..',
        service: require('./common/service'),
        wechat: require('./common/wechat'),
        promise: require('./util/es6-promise.min').Promise
    }
})
