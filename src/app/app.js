import './css/styles.css';
var app1 = angular.module('app1',[]);

app1.controller('ctrl1', ctrl1);

function ctrl1($scope) {
    $scope.randomNum = Math.floor((Math.random() * 10) + 1);
};


