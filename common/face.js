const url = 'https://api.douban.com';
const server = 'https://leotianwen.com';
const face = {
    /*豆瓣api*/
    intheaters: url + '/v2/movie/in_theaters',
    top: url + '/v2/movie/top250',
    subject: url + '/v2/movie/subject/',
    testwechat: server + '/wechat'
};
module.exports = face;
