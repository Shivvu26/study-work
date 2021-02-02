var app1 = angular.module('app1',[]);

app1.controller('ctrl1',function($scope){
    $scope.randomNum= Math.floor((Math.random()*10)+1);
});