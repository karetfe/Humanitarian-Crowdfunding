/**
 * Created by Sandeep on 01/06/14.
 */
angular.module('projectApp.controllers',[])
    .controller('ProjectListController',function($scope,$state,popupService,$window,Project){

    $scope.projects=Project.query();

    $scope.deleteProject=function(project){
        if(popupService.showPopup('Really delete this?')){
            project.$delete(function(){
                $window.location.href='';
            });
        }
    }

}).controller('ProjectViewController',function($scope,$stateParams,Project){

    $scope.project=Project.get({id:$stateParams.id});

}).controller('ProjectCreateController',function($scope,$state,$stateParams,Project){

    $scope.project=new Project();

    $scope.addProject=function(){
        $scope.project.$save(function(){
            $state.go('projects');
        });
    }

}).controller('ProjectEditController',function($scope,$state,$stateParams,Project){

    $scope.updateProject=function(){
        $scope.project.$update(function(){
            $state.go('projects');
        });
    };

    $scope.loadProject=function(){
        $scope.project=Project.get({id:$stateParams.id});
    };

    $scope.loadProject();
});