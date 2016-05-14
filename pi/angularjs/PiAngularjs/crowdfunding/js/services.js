/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('YeddnaApp.services',[])
    .factory('Project',function($resource){
    return $resource('http://localhost:3000/projects/:id',{id:'@_id'},{
        update: {
            method: 'PUT'
        }
    });
}).factory('Projectcat',function($resource){
    return $resource('http://localhost:3000/projects/search/category/:cat',{cat:'@cat'},{
        update: {
            method: 'PUT'
        }
    });
}).factory('Projectreg',function($resource){
    return $resource('http://localhost:3000/projects/search/region/:reg',{reg:'@reg'},{
        update: {
            method: 'PUT'
        }
    });
}).factory('Event',function($resource){
    return $resource('http://localhost:3000/events/:id',{id:'@_id'},{
        update: {
            method: 'PUT'
        }
    });
}).factory('Successstory',function($resource){
    return $resource('http://localhost:3000/successstorys/:id',{id:'@_id'},{
        update: {
            method: 'PUT'
        }
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});