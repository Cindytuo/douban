# Douban
> 微信小程序 - 豆瓣电影列表 使用gulp构建，支持es6

## run
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

## structure
>模块的引用使用 CommonJS规范

```shell
    ├── dist/           # 打包编译后的目录 微信开发者工具只需要打开该目录，开发者不要对该文件夹进行直接编辑
    ├── app.js          # 项目主逻辑
    ├── app.json        # 项目主设置
    ├── app.wxss        # 公共样式表
    └── pages/          # 页面目录
        ├── index/                              # 首页轮播页目录
            ├── index.js                             # 首页逻辑
            ├── index.wxml(*.html *.jade *.ejs)      # 首页结构
            └── index.wxss(*.sass *.less *.css)      # 首页样式表
        └── list/                               # 首页默认目录
            ├── list.js 
            ├── list.wxml(*.html *.jade *.ejs)
            └── list.wxss(*.sass *.less *.css)
        └── table/                              # 分类页目录
            ├── table.js 
            ├── table.wxml(*.html *.jade *.ejs)
            └── table.wxss(*.sass *.less *.css)
        └── detail/                             # 详情页目录
            ├── detail.js 
            ├── detail.wxml(*.html *.jade *.ejs)
            └── detail.wxss(*.sass *.less *.css)
        └── profile/                            # 用户页目录
            ├── profile.js 
            ├── profile.wxml(*.html *.jade *.ejs)
            └── profile.wxss(*.sass *.less *.css)
     └── images/                                # 资源目录 存放图片以及多媒体文件 
     └── components/                            # 组件目录 存放自定义组件
     └── util/                                  # 工具目录 存放自定义工具或类库
     └── common/                                # 公用目录 存放所有页面与后端交互的模块
            ├── face.js                              # 豆瓣api模块
            ├── fake.js                              # 假数据模块
            ├── wechat.js                            # 微信SDK模块
            └── service.js                           # 用来请求豆瓣api的公用方法
 
```




