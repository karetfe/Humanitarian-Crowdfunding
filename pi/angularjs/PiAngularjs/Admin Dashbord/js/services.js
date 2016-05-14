

angular.module('piWebApp.services',[]).factory('Event',function($resource){
    return $resource('http://localhost:3000/events/:id',{id:'@_id'},{
        update: {
            method: 'PUT'
        }
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});