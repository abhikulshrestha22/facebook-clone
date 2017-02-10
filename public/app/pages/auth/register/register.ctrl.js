(function(){

    'use strict';

    angular.module('app.pages.auth')
            .controller('registerCtrl',['$scope','auth',function($scope,auth){
                console.log("abc");

                $scope.submitFormRegister = function(){
                    var register = new auth.register($scope.formRegister);

                    register.$post({},function(data){
                        console.log(data);
                    })
                }
            }])
}())