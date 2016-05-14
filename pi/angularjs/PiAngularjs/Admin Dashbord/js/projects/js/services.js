/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('projectApp.services',[])
    .factory('Project',function($resource){
    return $resource('http://localhost:3000/projects/:id',{id:'@_id'},{
        update: {
            method: 'PUT'
        }
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});