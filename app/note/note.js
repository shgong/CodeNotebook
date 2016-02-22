'use strict';

angular.module('sitec')

.controller('Controller', ['$scope','$sce','$http','$routeParams', function($scope,$sce,$http,  $routeParams ){
    var ct=this;   // this won't work in the http scope
    ct.projects = []
    ct.category = []

    $http.get('/data').success(function(res,status){
        ct.projects=res.data;
        ct.category=res.category;
        //$http.get('doc/projects.json').then(function(res){ct.projects = res.data;});
    });

    var param = $routeParams.Id;
    console.log(param);

    $scope.currentProject=ct.projects.length>0?ct.projects[0]:null;
    $scope.category="";
    $scope.TrustedHtml="";

    $scope.ToggleCategory= function(cat) {
        if($scope.category==cat) $scope.category="";
        else $scope.category=cat;
    };
    $scope.ResetFields=function(){
        $scope.category='';
        $scope.searchTerm='';
    };
    $scope.IsSelected=function(cat){
        if($scope.category==cat) return true;
        return false;
    };
    $scope.deleteCurrent= function() {
    };
    $scope.SetCurrentProject=function(project){
        $scope.currentProject=project;
        $scope.TrustedHtml = $sce.trustAsHtml(project.content);
    };
    $scope.IsCurrentProject=function(project){
        if($scope.currentProject==project) return true;
        return false;
    };
}])


.filter('findTag', function() {
    return function( items, target) {
      if(target=="") return items;
      var filtered = [];
      angular.forEach(items, function(item) {
        var tags=item.tag;
        if(tags && item.tag.indexOf(target)>=0) {
          filtered.push(item);
        }
      });
      return filtered;
    };
})
