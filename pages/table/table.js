const global = getApp().globalData;
const Promise = global.promise;
const service = global.service;
const load = global.load;
var count = 10;

var page = {};

var params = {
    city: '上海',
    start: 0,
    count: count
}
var Model = {
    subjects: [],
    noInfinite: true,
    noInfiniteShow: ''
};

Page({
    /*页面初始数据*/
    data: Model,
    onLoad: function(param) {
        params.tableType = param.tableType;
        if (!page[params.tableType]||params.tableType == 'showing') {
            page[params.tableType] = 0;
        }
        params.start = page[params.tableType];
        console.log(page);
        this.renderList(params, function() {
            console.log('目前没有上映的电影哦，亲~~');
        });
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
    onPullDownRefresh: function() {},
    /*监听用户上拉触底*/
    onReachBottom: function() {},
    /*用户点击右上角分享*/
    onShareAppMessage: function() {

    },
    flow: function(e) {
        console.log(e);
        console.log(e.currentTarget);
    },
    infiniteLower: function(e) {
        page[params.tableType] = count + page[params.tableType];
        params.start = page[params.tableType];
        this.renderList(params, function() {
            this.setData({
                noInfiniteShow: 'show'
            });
            page[params.tableType] = page[params.tableType] - count;
        });
    },
    renderList: function(params, fn) {
        let _params = {
            city: '上海',
            start: params.start,
            count: params.count
        };

        if (params.tableType == 'showing') {
            service.getIntheaters(_params)
                .success((response) => {
                    console.log(response);
                    if (response && response.data && response.data.subjects.length) {
                        this.setData({
                            subjects: this.data.subjects.concat(response.data.subjects)
                        });
                    } else {
                        fn.call(this);
                    }
                })
                .error((error) => {
                    console.log(error);
                });
        }
        if (params.tableType == 'hoting') {
            service.getTop(_params)
                .success((response) => {
                    if (response && response.data && response.data.subjects.length) {
                        this.setData({
                            subjects: this.data.subjects.concat(response.data.subjects)
                        });
                    } else {
                        fn.call(this);
                    }
                })
                .error((error) => {
                    console.log(error);
                });
        }
    }
})
