# douban
> 豆瓣电影列表 微信小程序

##run
> gulp npm

#### clone
```bash
git clone https://github.com/Leotw/douban.git
cd douban
```
#### install
```bash
npm install
```
#### watch
```bash
gulp
```
#### build
```bash
gulp build
```

##structure
> CommonJs

```shell
    ├── app.js # 项目主逻辑
    ├── app.json # 项目主设置
    ├── app.wxss # 公共样式表
    └── pages/       # 页面目录
        ├── index/    # 首页轮播页目录
            ├── index.js # 首页逻辑
            ├── index.wxml(*.html *.jade *.ejs) # 首页结构
            └── index.wxss(*.sass *.less *.css) # 首页样式表
        └── list/  # 首页默认目录
            ├── list.js 
            ├── list.wxml(*.html *.jade *.ejs)
            └── list.wxss(*.sass *.less *.css)
        └── table/  # 分类页目录
            ├── table.js 
            ├── table.wxml(*.html *.jade *.ejs)
            └── table.wxss(*.sass *.less *.css)
        └── detail/  # 详情页目录
            ├── detail.js 
            ├── detail.wxml(*.html *.jade *.ejs)
            └── detail.wxss(*.sass *.less *.css)
        └── profile/  # 用户页目录
            ├── profile.js 
            ├── profile.wxml(*.html *.jade *.ejs)
            └── profile.wxss(*.sass *.less *.css)
```




