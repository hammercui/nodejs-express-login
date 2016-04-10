
# 简介

使用
**前端angular + nodejs服务器 + redis数据库的架构**

实现了：用户输入账号密码登录，登录成功获得个人的信息，并跳转个人信息页的功能。

项目文件目录

```
+bin
 -www  //nodejs执行脚本
+public //web的静态文件地址html,javascript,css imga
	+images
	+javascripts
      app.js    //angular脚本的主文件
	+stylesheets
	+view       //angular页面文件夹
		-login.html //登录页面
		-member.html //显示个人信息页面
	-common.js  //react公共脚本
	-index.html //首页 angular框架
	-index_react.html //首页 react框架
	-main.min.js    //react脚本打包之后文件
+routes //nodejs的路由脚本文件
+view     //静态页面模板
-app.js   //创建的express实例
-package.json 
```

# 如何运行

## 安装redis数据库，并新建以下数据

| key        | value           | 说明  |
| ------------- |:-------------:| -----:|
| [用户名]_pwd      | 123456 | 用户密码，字符串 |
| [用户名]      | ["地址"，"qq号","性别","职业","国家和地区"]      |  用户的人人信息，数组 |
如图
![](http://7xrf0l.com1.z0.glb.clouddn.com/16-4-10/57063548.jpg)

数据库ip:`127.0.0.1`
数据库端口号：`6379`

## 安装nodejs服务，命令行运行
```
npm install
```
## 启动nodejs服务，命令行运行
```
npm start
```
在浏览器输入`http://localhost:3000`打开项目，如图
![](https://github.com/hammercui/nodejs-express-login/raw/master/npminstall.gif)
![](https://github.com/hammercui/nodejs-express-login/raw/master/html.gif)

# 所使用到的技术

## nodejs服务器

使用express做为开发框架
使用package.js管理第三方开发包，启动项目
public作为静态资源目录



## angular前端

使用第三方cdn
```
<script src="//cdn.bootcss.com/angular.js/1.4.6/angular.js"></script>
<script src="//cdn.bootcss.com/angular.js/1.4.6/angular-route.js"></script>
```
使用ngRoute实现路由功能

## redis数据库

windws版下载地址，https://github.com/MSOpenTech/redis/releases


## 思考

