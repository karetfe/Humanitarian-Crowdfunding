/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('faqApp.services',[]).factory('Faq',function($resource){
    return $resource('http://localhost:3000/faqs/:id',{id:'@_id'},{
        update: {
            method: 'PUT'
        }
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});