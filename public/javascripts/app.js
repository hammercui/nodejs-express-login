/**
 * Created by hammer on 2016/4/10.
 * 前端app入口
 */
var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/",{
                templateUrl:'view/login.html',
                controller: 'loginCtrl',
            })
            .when("/member",{
                templateUrl:'view/member.html',
                controller: 'memberCtrl',
            })
            .otherwise({
                redirectTo: '/'
            });
        //$locationProvider.html5Mode(true);
    })

    .controller('loginCtrl', function($scope,$routeParams, $http,$location,$rootScope) {
        $scope.account= "hammercui";
        $scope.password= "***";
        $scope.loginFail = false;
        $scope.clickLogin = function () {
            $scope.loginFail = false;
            var account = $scope.account;
            var password = $scope.password;
            $http({
                method:"POST",
                url:"/member/login",
                data :{
                    "account":account,
                    "password":password
                }
            }).success(function(data) {
                var code = data.code;
                if(code>100){
                    $scope.loginFail = true;
                    $scope.failMsg = data.msg;
                }
                else{
                    //$routeParams.member = data.member;
                    $rootScope.member = data.member;
                    $location.path("/member");
                    return;
                }
            }).error(function() {
                $scope.loginFail = true;
                $scope.failMsg = "登录失败，未知错误"
            });
        };
    })
    .controller('memberCtrl',function ($scope,$routeParams,$rootScope) {
        $scope.member = $rootScope.member;
        console.log("从router获得："+$scope.member.address);
    })

;


