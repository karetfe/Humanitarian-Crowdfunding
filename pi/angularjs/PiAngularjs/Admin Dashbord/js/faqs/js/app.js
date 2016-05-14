/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('faqApp',['ui.router','ngResource','faqApp.controllers','faqApp.services']);

angular.module('faqApp').config(function($stateProvider,$httpProvider){
    $stateProvider.state('faqs',{
        url:'/faqs',
        templateUrl:'partials/faqs/faqs.html',
        controller:'FaqListController'
    }).state('viewFaq',{
       url:'/faqs/:id/view',
       templateUrl:'partials/faqs/faq-view.html',
       controller:'FaqViewController'
    }).state('newFaq',{
        url:'/faqs/new',
        templateUrl:'partials/faqs/faq-add.html',
        controller:'FaqCreateController'
    }).state('editFaq',{
        url:'/faqs/:id/edit',
        templateUrl:'partials/faqs/faq-edit.html',
        controller:'FaqEditController'
    });
}).run(function($state){
   $state.go('faqs');
});