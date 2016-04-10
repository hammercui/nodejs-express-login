/**
 * Created by hammer on 2016/4/9.
 */
'use strict'
var express = require('express');
var Router = express.Router();
var MemberDao = require('../model/memberDao');
var member = {};

//登录,校验账号密码
Router.post("/login",function(request,response,next) {
    response.setHeader('Content-Type','text/html;charset=UTF-8');
    var account = request.body.account;
    var password = request.body.password;
    // var name= 'hammercui';
    // var pwd="123456";
    console.log("account:"+account+"  password:"+password);
    MemberDao.get(account+"_pwd",function (error,replay) {
        var result = {};
        if(error) {
            result.code = 101.
            result.msg = "账号不存在";
            response.jsonp(result);
        }
        else{
            //密码相等
            console.log("replay:"+replay);
            if(password == replay){
                next();
            }
            else{
                result.code = replay==null?101:102.
                result.msg = replay==null?"账号不存在":"密码错误";
                response.jsonp(result);
            }
        }

    });
});

//登录返回结果
Router.post("/login",function (request,response) {
    response.setHeader('Content-Type','text/html;charset=UTF-8');
    var account = request.body.account;
    MemberDao.smembers(account,function (error,replay) {
        //MemberDao.quit();
        if(error){
            response.end("获取数据失败："+error);
        }
        else{
            member.address = replay[0];
            member.qq = replay[1];
            member.gender = replay[2];
            member.job = replay[3];
            member.nation = replay[4];
            var result = {};
            result.code = 100;
            result.member = member;
            response.jsonp(result);
        }
    });
});

module.exports = Router;