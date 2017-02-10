(function(){

    'use strict';

    angular.module('app.pages.auth')
            .controller('registerCtrl',['$scope','auth',function($scope,auth){
                console.log("abc");

                $scope.submitFormRegister = ()=>{
                    var register = new auth.register(formRegister);

                    register.$post({},function(data){
                        console.log(data);
                    })
                }
            }])
}())