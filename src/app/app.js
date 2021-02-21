var app1 = angular.module('app1',[]);

app1.controller('ctrl1', ctrl1);

function ctrl1($scope) {
    $scope.randomNum = Math.floor((Math.random() * 10) + 1);
    $scope.name = 'Shivank'
    $scope.counter = 0;
    $scope.$watch('name', function () {
        $scope.counter = $scope.counter + 1;
    });

    $scope.datetime = new Date();

    document.getElementById("updateTime").addEventListener('click', function () {
        console.log("update time clicked");
        $scope.datetime = new Date();
        $scope.$digest();
        console.log($scope.datetime);
    });

    document.getElementById("updateTimeBtn").addEventListener('click', function () {
        $scope.$apply(function () {
            console.log("update time clicked");
            $scope.datetime = new Date();
            console.log($scope.datetime);
        });
    });

};


