(function(){
    'use strict';

    angular.module('app')
            .factory('auth',['$resource','endpoint',function($resource,endpoint){
                return {
                    register:$resource(endpoint + '/register',null,{
                        'post':{
                            method:'POST',

                        }
                    })
                }
            }])
}())