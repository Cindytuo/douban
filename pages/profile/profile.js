const global = getApp().globalData;
const wc = global.wechat;
Page({
    /*页面初始数据*/
    data: {
        message: 'Hello World form profile',
        userInfo: {},
        connect: ''
    },

    onLoad: function() {
        wc.login()
            .success((res) => {
                wc.getUserInfo()
                    .success((res) => {
                        console.log(res);
                        this.setData({
                            userInfo: res.userInfo
                        });
                    })
                    .fail((error) => {
                        console.log(error);
                    });
            })
            .fail((error) => {
                console.log(error);
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
    onPullDownRefresh: function() {

    },
    /*监听用户上拉触底*/
    onReachBottom: function() {

    },
    /*用户点击右上角分享*/
    onShareAppMessage: function() {

    }
})
