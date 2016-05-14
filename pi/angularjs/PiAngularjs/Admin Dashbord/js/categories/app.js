

angular.module('piWebApp',['ui.router','ngResource','piWebApp.controllers','piWebApp.services']);

angular.module('piWebApp').config(function($stateProvider,$httpProvider){
    $stateProvider.state('categories',{
        url:'/categories',
        templateUrl:'partials/categories/categories.html',
        controller:'CategoriesListController'
    }).state('viewCategory',{
       url:'/categories/:id/view',
       templateUrl:'partials/categories/category-view.html',
       controller:'CategoriesViewController'
    }).state('newCategory',{
        url:'/categories/new',
        templateUrl:'partials/categories/category-add.html',
        controller:'CategoriesCreateController'
    }).state('editCategory',{
        url:'/categories/:id/edit',
        templateUrl:'partials/categories/category-edit.html',
        controller:'CategoriesEditController'
    });
}).run(function($state){
   $state.go('categories');
});