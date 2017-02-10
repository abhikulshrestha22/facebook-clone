(function(){

    'use strict';

    angular.module('app.pages.auth')
            .directive('registerForm',function(){
                return {
                    restrict:'E',
                    templateUrl:'app/pages/auth/register/register.html',
                    controller:'registerCtrl'
                }
            });

}())

