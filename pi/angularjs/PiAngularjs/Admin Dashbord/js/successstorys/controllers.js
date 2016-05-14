
angular.module('piWebApp.controllers',[])
    .controller('SuccessstorysListController',function($scope,$state,popupService,$window,Successstory){

    $scope.successstorys=Successstory.query();

    $scope.deleteSuccessstory=function(successstory){
        if(popupService.showPopup('Really delete this?')){
            successstory.$delete(function(){
                $window.location.href='';
            });
        }
    }

}).controller('SuccessstorysViewController',function($scope,$stateParams,Successstory){

    $scope.successstory=Successstory.get({id:$stateParams.id});

}).controller('SuccessstorysCreateController',function($scope,$state,$stateParams,Successstory){

    $scope.successstory=new Successstory();

    $scope.addSuccessstory=function(){
        $scope.successstory.$save(function(){
            $state.go('successstorys');
        });
    }

}).controller('SuccessstorysEditController',function($scope,$state,$stateParams,Successstory){

    $scope.updateSuccessstory=function(){
        $scope.successstory.$update(function(){
            $state.go('successstorys');
        });
    };

    $scope.loadSuccessstory=function(){
        $scope.successstory=Successstory.get({id:$stateParams.id});
    };

    $scope.loadSuccessstory();
});