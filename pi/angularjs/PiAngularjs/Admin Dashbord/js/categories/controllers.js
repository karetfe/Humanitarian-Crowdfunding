
angular.module('piWebApp.controllers',[])
    .controller('CategoriesListController',function($scope,$state,popupService,$window,Category){

    $scope.categories=Category.query();

    $scope.deleteCategory=function(category){
        if(popupService.showPopup('Really delete this?')){
            category.$delete(function(){
                $window.location.href='';
            });
        }
    }

}).controller('CategoriesViewController',function($scope,$stateParams,Category){

    $scope.category=Category.get({id:$stateParams.id});

}).controller('CategoriesCreateController',function($scope,$state,$stateParams,Category){

    $scope.category=new Category();

    $scope.addCategory=function(){
        $scope.category.$save(function(){
            $state.go('categories');
        });
    }

}).controller('CategoriesEditController',function($scope,$state,$stateParams,Category){

    $scope.updateCategory=function(){
        $scope.category.$update(function(){
            $state.go('categories');
        });
    };

    $scope.loadCategory=function(){
        $scope.category=Category.get({id:$stateParams.id});
    };

    $scope.loadCategory();
});