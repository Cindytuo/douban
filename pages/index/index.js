const app = getApp();
const global = getApp().globalData;
const service = require('../../common/service');
const load = global.load;
const pageConfig = {
    startData: {
        message: 'Hello World',
        startType: 'default',
        startSize: 'default',
        startPlain: false,
        startFlag: false,
        btnActive: '',
        posterUrl: []
    },
    posterInit: function () {
        console.log(service);
        service.getIntheaters({
            city: '上海',
            start: 0,
            count: 20
        }).success((response)=> {
                console.log(response);
                console.log(response);
                let data = response.data;
                let subjects = data.subjects;
                let posterUrlArry = [];
                let i = 0;
                while (i < 3) {
                    posterUrlArry.push(subjects[i].images.large);
                    i++;
                }
                ;
                this.setData({
                    posterUrl: posterUrlArry
                });
            })
            .error((error)=> {
                console.log(error);
            })
    },
    startOpen: function () {
        wx.switchTab({url: '../list/list'});
    },
    swiperHandle: function (e) {
        if (e.detail.current === 2) {
            this.setData({
                startFlag: true
            });
        }
        let _btnActive = this.data.startFlag ? 'active' : '';
        this.setData({
            btnActive: _btnActive
        });
    }
}

Page({
    /*页面初始数据*/
    data: pageConfig.startData,

    onLoad: function () {
        pageConfig.posterInit.apply(this);
    },
    onReady: function () {

    },
    /*监听页面显示*/
    onShow: function () {

    },
    /*监听页面隐藏*/
    onHide: function () {

    },
    /*监听页面卸载*/
    onUnload: function () {

    },
    /*监听用户下拉动作*/
    onPullDownRefresh: function () {

    },
    /*监听用户上拉触底*/
    onReachBottom: function () {

    },
    /*用户点击右上角分享*/
    onShareAppMessage: function () {

    },
    startOpen: pageConfig.startOpen,
    swiperHandle: pageConfig.swiperHandle
})