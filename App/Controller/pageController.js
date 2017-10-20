/**
 * Created by Nan on 2017/10/18.
 */

app.controller("pageController", ["$scope", "pageServer", function ($scope, pageServer) {
    pageServer.getPage("get","http://localhost:7799/pag").then(function(res){
        $scope.items=res;
        console.log($scope.items)
    });
     $scope.active='active'

}]);
