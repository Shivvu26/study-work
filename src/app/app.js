
var app1 = angular.module('app1',[]);


app1.service('exService', function(){
    this.add = function(a,b) {
        return a+b;
    }
});


app1.controller('ctrl1', ctrl1);

function ctrl1($scope,exService) {                                  //injecting exService
    $scope.randomNum = Math.floor((Math.random() * 10) + 1);
    $scope.DI_Result = exService.add(4,7);
};


