const app = getApp();
const global = app.globalData;
const service = require('../../common/service');
const Promise = require('../../util/es6-promise.min').Promise;
const load = global.load;
var page = 1;
var param = {

}
var Model = {
    subjects:[]
};

Page({
    /*页面初始数据*/
    data: Model,
    onLoad: function (param) {
        console.log(param);
        param.tableType = 'showing';
        if(param.tableType == 'showing'){
            let params = {
                city: '上海',
                start: 0,
                count: 10
            };
            service.getIntheaters(params)
                .success((response)=>{
                    console.log(response);
                    this.setData({
                        subjects:response.data.subjects
                    });
                })
                .error((error)=>{
                    console.log(error);
                });
        }

        if(param.tableType == 'hoting'){
            let params = {
                city: '上海',
                start: 0,
                count: 10
            };
            service.getTop(params)
                .success((response)=>{
                    console.log(response);
                    this.setData({
                        subjects:response.data.subjects
                    });
                })
                .error((error)=>{
                    console.log(error);
                });
        }
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
    onReachBottom: function (param) {
        param.tableType = 'showing';
    },
    /*用户点击右上角分享*/
    onShareAppMessage: function () {

    },
    flow: function (e) {
        console.log(e);
        console.log(e.currentTarget);
    }
})