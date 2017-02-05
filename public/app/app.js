angular.module('app',[
    'app.pages',
    'ui.router'
]).config(function($stateProvider,$urlRouterProvider){


    $urlRouterProvider.otherwise('/home');
    

    $stateProvider.state({
        name:'home',
        url:'/home',
        templateUrl:'app/pages/home/home.html'
    });

    $stateProvider.state({
        name:'about',
        url:'/about',
        template:'asdfg'
    });



});