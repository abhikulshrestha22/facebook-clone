(function(){

angular.module('app.pages.home')
        .directive('topBar',function(){
            return{
                restrict:'E',
                
                templateUrl:'app/theme/components/topBar/topBar.html'
            };
        });
}())


