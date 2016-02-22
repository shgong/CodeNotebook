
angular.module('sitec', [
    'ngRoute'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/view1', {
    templateUrl: 'note/note.html',
    controller: 'View1Ctrl'
  })
  .otherwise({redirectTo: '/home'});
}])


.controller('AddController', ['$scope','$http', function($scope,$http) {
    $scope.title = "";
    $scope.taglist = ["Goldman Sachs"];
    $scope.text = ""
    $scope.question= '';

    $scope.addtag = function() {
      if ($scope.text) {
        $scope.taglist.push(this.text);
        $scope.text = '';
      }
    };

    $scope.removetag = function(tag) {
        var index = $scope.taglist.indexOf(tag);
        if (index > -1) {
          $scope.taglist.splice(index, 1);
         }
    };

    $scope.submit = function(){

        var questionhtml = "<p>" + $scope.question + "</p>";
        questionhtml = questionhtml.replace(/\r\n\r\n/g, "</p><p>").replace(/\n\n/g, "</p><p>");
        questionhtml = questionhtml.replace(/\r\n/g, "<br />").replace(/\n/g, "<br />");

        $http({
            method:'POST',
            url:"/add",
            header:{"Content-Type": "application/json"},
            data: {
            "name":$scope.title,
            "tag":$scope.taglist,
            "content":questionhtml}
        });
    };

}]);




//})();

