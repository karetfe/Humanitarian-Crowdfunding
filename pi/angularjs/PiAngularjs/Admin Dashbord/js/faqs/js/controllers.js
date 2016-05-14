/**
 * Created by Sandeep on 01/06/14.
 */
angular.module('faqApp.controllers',[]).controller('FaqListController',function($scope,$state,popupService,$window,Faq){

    $scope.faqs=Faq.query();

    $scope.deleteFaq=function(faq){
        if(popupService.showPopup('Really delete this?')){
            faq.$delete(function(){
                $window.location.href='';
            });
        }
    }

}).controller('FaqViewController',function($scope,$stateParams,Faq){

    $scope.faq=Faq.get({id:$stateParams.id});

}).controller('FaqCreateController',function($scope,$state,$stateParams,Faq){

    $scope.faq=new Faq();

    $scope.addFaq=function(){
        $scope.Faq.$save(function(){
            $state.go('Faqs');
        });
    }

}).controller('FaqEditController',function($scope,$state,$stateParams,Faq){

    $scope.updateFaq=function(){
        $scope.faq.$update(function(){
            $state.go('faqs');
        });
    };

    $scope.loadFaq=function(){
        $scope.faq=Faq.get({id:$stateParams.id});
    };

    $scope.loadFaq();
});