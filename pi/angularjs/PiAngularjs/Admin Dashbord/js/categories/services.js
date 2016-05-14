/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('piWebApp.services',[])
.factory('Category',function($resource){
    return $resource('http://localhost:3000/categories/:id',{id:'@_id'},{
        update: {
            method: 'PUT'
        }
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});