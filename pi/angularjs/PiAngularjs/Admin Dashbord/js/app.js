

angular.module('piWebApp',['ui.router','ngResource','piWebApp.controllers','piWebApp.services']);

angular.module('piWebApp').config(function($stateProvider,$httpProvider){
    $stateProvider.state('events',{
        url:'/events',
        templateUrl:'partials/movies.html',
        controller:'EventsListController'
    }).state('viewEvent',{
       url:'/events/:id/view',
       templateUrl:'partials/movie-view.html',
       controller:'EventsViewController'
    }).state('newEvent',{
        url:'/events/new',
        templateUrl:'partials/movie-add.html',
        controller:'EventsCreateController'
    }).state('editEvent',{
        url:'/events/:id/edit',
        templateUrl:'partials/movie-edit.html',
        controller:'EventsEditController'
    });
}).run(function($state){
   $state.go('events');
});