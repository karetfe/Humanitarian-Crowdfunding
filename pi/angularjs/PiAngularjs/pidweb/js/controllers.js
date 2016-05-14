     

 app = angular.module('app', ['ngResource']);

/********************FAQ******************************/
        app.controller('PostingsCtrlGet', ['$scope', '$resource', function($scope, $resource) {
         
                
                var postingsResource = $resource('http://localhost:3000/faqs', {});
                $scope.postings = postingsResource.query();
         
            
        }]);     

        app.controller('PostingsCtrlAdd', ['$scope', '$resource', function($scope, $resource) {
            var postingsResource = $resource('http://localhost:3000/faqs', {});
            
            $scope.createPost = function() {
               $scope.post = postingsResource.save($scope.post);
            };
        }]);
/********************reclamtion******************************/
   app.controller('ReclamtionsCtrlGet', ['$scope', '$resource', function($scope, $resource) {
         
                
                var postingsResource = $resource('http://localhost:3000/reclamations', {});
                $scope.postings = postingsResource.query();
         
            
        }]);     

        app.controller('ReclamtionsAdd', ['$scope', '$resource', function($scope, $resource) {
            var postingsResource = $resource('http://localhost:3000/reclamations', {});
            
            $scope.createPost = function() {
               $scope.post = postingsResource.save($scope.post);
            };
        }]);