/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('projectApp',['ui.router','ngResource','projectApp.controllers','projectApp.services']);

angular.module('projectApp').config(function($stateProvider,$httpProvider){
    $stateProvider.state('projects',{
        url:'/projects',
        templateUrl:'partials/projects/projects.html',
        controller:'ProjectListController'
    }).state('viewProject',{
       url:'/projects/:id/view',
       templateUrl:'partials/projects/project-view.html',
       controller:'ProjectViewController'
    }).state('newProject',{
        url:'/projects/new',
        templateUrl:'partials/projects/project-add.html',
        controller:'ProjectCreateController'
    }).state('editProject',{
        url:'/projects/:id/edit',
        templateUrl:'partials/projects/project-edit.html',
        controller:'ProjectEditController'
    });
}).run(function($state){
   $state.go('projects');
});