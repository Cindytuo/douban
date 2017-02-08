const global = getApp().globalData;
const Promise = global.promise;
const service = global.service;
const load = global.load;
const ctrlConfig = {
    drawStar: function(star) {
        /*draw stars*/
    },
    random: function(min = 0, max = 100) {
        return parseInt(Math.random() * max + min);
    }
};
var Model = {
    showing: [load, load, load],
    hoting: [load, load, load],
    douList: load,
    popular: load,
    adver: load
};

Page({
    /*页面初始数据*/
    data: Model,

    onLoad: function() {
        let douList = [];
        let adver = '';
        let showModel = {
            movieName: load
        };
        let hotModel = {
            movieName: load
        };
        let popularModel = {
            title: load,
            body: load,
            star: load,
            user: load,
            movieName: load
        };
        let start = ctrlConfig.random(0, 80);
        let intheatersParams = {
            city: '上海',
            start: 0,
            count: 3
        };
        let topParams = {
            city: '上海',
            start: start,
            count: 3
        };
        Promise.all([
            service.getIntheaters(intheatersParams),
            service.getTop(topParams),
            service.getReviews()
        ]).then((response) => {
            console.log(response);
            let showList = response[0].data.subjects;
            let hotList = response[1].data.subjects;
            let popular = response[2].data;
            this.setData({
                showing: showList,
                hoting: hotList,
                popular: popular
            });
        }).catch((error) => {
            console.log(error);
        });
        ctrlConfig.drawStar(popularModel.star);
    },
    onReady: function() {

    },
    /*监听页面显示*/
    onShow: function() {

    },
    /*监听页面隐藏*/
    onHide: function() {

    },
    /*监听页面卸载*/
    onUnload: function() {

    },
    /*监听用户下拉动作*/
    onPullDownRefresh: function() {

    },
    /*监听用户上拉触底*/
    onReachBottom: function() {

    },
    /*用户点击右上角分享*/
    onShareAppMessage: function() {

    },
    flow: function(e) {
        let cTarget = e.currentTarget;
        let target = e.target;
        console.log({ cTarget: cTarget });
        console.log({ Target: target });
        if (target.dataset.name == 'show-btn') {
            console.log('dingpiao');
            return;
        } else {
            wx.navigateTo({
                url: `../detail/detail?id=${cTarget.id}`
            });
        }
    }
})
