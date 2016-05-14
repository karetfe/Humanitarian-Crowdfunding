var feeds = [];
angular.module('YeddnaApp.controllers',[])
    	.factory('FeedLoader', function ($resource) {
		return $resource('http://ajax.googleapis.com/ajax/services/feed/load', {}, {
			fetch: { method: 'JSONP', params: {v: '1.0', callback: 'JSON_CALLBACK'} }
		});
	})
	.service('FeedList', function ($rootScope, FeedLoader) {
		this.get = function() {
			var feedSources = [
				
				{title: 'Wired', url: 'http://humanitaire.revues.org/backend?format=rssnumeros'},
			];
			if (feeds.length === 0) {
				for (var i=0; i<feedSources.length; i++) {
					FeedLoader.fetch({q: feedSources[i].url, num: 10}, {}, function (data) {
						var feed = data.responseData.feed;
						feeds.push(feed);
					});
				}
			}
			return feeds;
		};
	})
	.controller('FeedCtrl', function ($scope, FeedList) {
		$scope.feeds = FeedList.get();
		$scope.$on('FeedList', function (event, data) {
			$scope.feeds = data;
		});
	})
    
    
    
    
    
    .controller('HomeController',function($scope, $http,geolocation,$state,$stateParams,Projectreg) {
    var lat,long,link,loc;
    geolocation.getLocation().then(function(data){
      $scope.coords = {lat:data.coords.latitude, long:data.coords.longitude};
        lat=data.coords.latitude;
        long=data.coords.longitude;
        link='http://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+long+'&sensor=false';
        $http.get(link).
        success(function(data) {
        loc=data.results[0].address_components[3].long_name;    
        $scope.name =data.results[0].formatted_address;
        $scope.projects=Projectreg.query({reg:loc});  
                
        });
    });
     
    
}).controller('AboutController',function($scope,$state,popupService,$window){

}).controller('ProfileController',function($scope,$state,popupService,$window, $http, localStorageService){

    	$scope.ed =[];
	$scope.ex = [];
	$http({
		method: 'GET',
		url: $scope.endpoint + 'users/profile?token='+$scope.token,
	 }).then(function successCallback(response) {
	  	$scope.work = response.data.work;
	  	$scope.place = response.data.place;
	  	$scope.username = response.data.username;
        $scope.password = response.data.password;
	  	$scope.id = response.data._id;
	}, function errorCallback(response) {

	});
    
}).controller('LogoutController',function($scope,$state,popupService,$window, $http, localStorageService){
    if($scope.token == null){
        $state.go('login', {}, {reload: true});
    }
    localStorageService.remove('token');
    $window.location.reload();
    $state.go('home', {}, {reload: true});

}).controller('LoginController', function($scope, $http, localStorageService, $state, $window) {
    if($scope.token){
        $state.go('home', {}, {reload: true});
    }
    $scope.login = function(){
        $http({
            method: 'POST',
            url: $scope.endpoint + 'authenticate',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: 'username=' + $scope.username + '&password='+$scope.password
        }).then(function successCallback(response) {
            if(response.data.success){
                localStorageService.set('token', response.data.token);
                $window.location.reload();
            }
        }, function errorCallback(response) {

        });
    };
}).controller('RegisterController',function($scope,$state,popupService,$window, $http, localStorageService){
    $scope.register = function(){ 
        $http({
            method: 'POST',
            url: $scope.endpoint + 'users/register',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: 'username=' + $scope.username + '&password='+$scope.password + '&place='+$scope.place + '&work='+$scope.work
         }).then(function successCallback(response) {
            $state.go('login', {}, {reload: true});
        }, function errorCallback(response) {

        });
    };

}).controller('ProjectListController',function($scope,$state,popupService,$window,Project){

    $scope.projects=Project.query();

    $scope.deleteProject=function(project){
        if(popupService.showPopup('Really delete this?')){
            project.$delete(function(){
                $window.location.href='';
            });
        }
    }

}).controller('ProjectViewController',function($scope,$stateParams,Project){

    $scope.project=Project.get({id:$stateParams.id});

}).controller('ProjectCreateController',function($scope,$state,$stateParams,Project,geolocation,$http, $interval){
    var lat,long,link;
    $scope.project=new Project();
   
    geolocation.getLocation().then(function(data){
        $scope.project.lat=data.coords.latitude;
        $scope.project.lon=data.coords.longitude; 
        lat=data.coords.latitude;
        long=data.coords.longitude;
        link='http://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+long+'&sensor=false';
        $http.get(link).
            success(function(data) {
            $scope.project.region=data.results[0].address_components[3].long_name;                    
        });
    });
    $scope.getCurrentLocation = function(evt){
        
        $scope.project.lat= this.getPosition().lat();
        $scope.project.lon= this.getPosition().lng();
        lat=this.getPosition().lat();
        long=this.getPosition().lng();
        link='http://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+long+'&sensor=false';
        $http.get(link).
            success(function(data) {
            $scope.project.region=data.results[0].address_components[3].long_name;                    
        });
    };


        $scope.addProject=function(){
        $scope.project.$save(function(){
            $state.go('projects');
            });
        }
 

}).controller('ProjectSearchController',function($scope,$state,$stateParams,Projectcat){

    $scope.projects=Projectcat.query({cat:$stateParams.cat});

}).controller('EventsListController',function($scope,$state,popupService,$window,Event){

    $scope.events=Event.query();

    $scope.deleteEvent=function(event){
        if(popupService.showPopup('Really delete this?')){
            event.$delete(function(){
                $window.location.href='';
            });
        }
    }

}).controller('EventsViewController',function($scope,$stateParams,Event){

    $scope.event=Event.get({id:$stateParams.id});

}).controller('EventsCreateController',function($scope,$state,$stateParams,Event){

    $scope.event=new Event();

    $scope.addEvent=function(){
        $scope.event.$save(function(){
            $state.go('events');
        });
    }

}).controller('EventsEditController',function($scope,$state,$stateParams,Event){

    $scope.updateEvent=function(){
        $scope.event.$update(function(){
            $state.go('events');
        });
    };

    $scope.loadEvent=function(){
        $scope.event=Event.get({id:$stateParams.id});
    };

    $scope.loadEvent();
}).controller('SuccessstorysListController',function($scope,$state,popupService,$window,Successstory){

    $scope.successstorys=Successstory.query();

    $scope.deleteSuccessstory=function(successstory){
        if(popupService.showPopup('Really delete this?')){
            successstory.$delete(function(){
                $window.location.href='';
            });
        }
    }

}).controller('SuccessstorysViewController',function($scope,$stateParams,Successstory){

    $scope.successstory=Successstory.get({id:$stateParams.id});

}).controller('SuccessstorysCreateController',function($scope,$state,$stateParams,Successstory){

    $scope.successstory=new Successstory();

    $scope.addSuccessstory=function(){
        $scope.successstory.$save(function(){
            $state.go('successstorys');
        });
    }

}).controller('SuccessstorysEditController',function($scope,$state,$stateParams,Successstory){

    $scope.updateSuccessstory=function(){
        $scope.successstory.$update(function(){
            $state.go('successstorys');
        });
    };

    $scope.loadSuccessstory=function(){
        $scope.successstory=Successstory.get({id:$stateParams.id});
    };

    $scope.loadSuccessstory();
}).controller('FaqsCtrl', ['$scope', '$resource', function($scope, $resource) {
         
                
                var postingsResource = $resource('http://localhost:3000/faqs', {});
                $scope.postings = postingsResource.query();
            $scope.createPost = function() {
                
            $scope.post = postingsResource.save($scope.post);
            
            };
            
        }]);