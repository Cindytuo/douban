const global = getApp().globalData;
const Promise = global.promise;
const service = global.service;
const load = global.load;
var Para = {
    movieNameEng: load,
    movieNameChi: load,
    movieStar: load,
    doubanPrice: load,
    preVue: load,
    people: load,
    time: load,
    directors: load,
    actor: load,
    type: load,
    pictrue: load,
    comment: load,
    commentsCount: load,
    question: load,
    doCount: load
};

Page({
    /*页面初始数据*/
    data: Para,

    onLoad: function(param) {
        service.getOneSubject(param)
            .success((response) => {
                let data = response.data;
                console.log(data);
                this.setData({
                    movieNameEng: data.original_title,
                    movieNameChi: data.title,
                    movieStar: data.rating.average,
                    preVue: data.trailer_urls, //array
                    people: data.wish_count,
                    time: data.mainland_pubdate ? data.mainland_pubdate : `${data.year}年`,
                    directors: data.directors,
                    actor: data.casts, //array
                    type: data.genres, //array
                    pictrue: data.images, //array
                    commentsCount: data.comments_count,
                    photos: data.photos, //array
                    doCount: data.do_count
                });
            })
            .error((error) => {
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
