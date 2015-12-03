
$(document).ready(function() {
    $('#stack').on('touchstart','.stack-hover' ,function(e) {
        e.preventDefault();
        if ($(this).hasClass('hover_effect')) this.click();
        else
        {
        $('.stack-hover').removeClass('hover_effect');
        $(this).addClass('hover_effect');
        }
    });

});



    app = angular.module('sitec',[])        // Module(name,dependency)

    app.controller('Controller', ['$scope','$sce','$http', function($scope,$sce,$http){
        var ct=this;   // this won't work in the http scope
        ct.projects = []
        ct.category = []



        $http.get('/data').success(function(res,status){
            ct.projects=res.data;
            ct.category=res.category;
            //$http.get('doc/projects.json').then(function(res){ct.projects = res.data;});
        });

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
            var index = $scope.taglist.indexOf(tag);
            if (index > -1) {
              $scope.taglist.splice(index, 1);
             }
        };
        $scope.SetCurrentProject=function(project){
            $scope.currentProject=project;
            $scope.TrustedHtml = $sce.trustAsHtml(project.content);
        };
        $scope.IsCurrentProject=function(project){
            if($scope.currentProject==project) return true;
            return false;
        };
    }]);

    app.filter('findTag', function() {
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
    });

    app.controller('AddController', ['$scope','$http', function($scope,$http) {
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

