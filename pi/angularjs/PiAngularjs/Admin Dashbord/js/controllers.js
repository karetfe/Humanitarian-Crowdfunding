
angular.module('piWebApp.controllers',[])
    .controller('EventsListController',function($scope,$state,popupService,$window,Event){

    $scope.events=Event.query();

    $scope.deleteEvent=function(event){
        if(popupService.showPopup('Really delete this?')){
            event.$delete(function(){
                $window.location.href='';
            });
        }
    }

}).controller('EventsViewController',function($scope,$stateParams,Event){

    $scope.event=Event.get({id:$stateParams.id});

}).controller('EventsCreateController',function($scope,$state,$stateParams,Event){

    $scope.event=new Event();

    $scope.addEvent=function(){
        $scope.event.$save(function(){
            $state.go('events');
        });
    }

}).controller('EventsEditController',function($scope,$state,$stateParams,Event){

    $scope.updateEvent=function(){
        $scope.event.$update(function(){
            $state.go('events');
        });
    };

    $scope.loadEvent=function(){
        $scope.event=Event.get({id:$stateParams.id});
    };

    $scope.loadEvent();
});