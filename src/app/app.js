
var app1 = angular.module('app1',[]);

app1.controller('ctrl1', ctrl1);

function ctrl1($scope) {
    $scope.randomNum = Math.floor((Math.random() * 10) + 1);
    $scope.value = "Printing the line"
};

app1.directive('samDir', function () {
    return {
        templateUrl: 'dir.html',
    }
});

app1.directive('secDir', function () {
    return {
        link:function($scope,element) {                         //link is used to  access events in DOM
            element.bind('click',function () {
                element.html('You clicked! Awesome , hi..!!, m coming from a directive here.');
            });},
    }
});

app1.directive('firstDirective', function () {
    return {
        restrict: 'E',
        controller: function ($scope) {
            this.data = "Initial Value";

            this.change = function (val) {
                $scope.$emit('val-change', val);
                this.data = val;
            }
        },
        controllerAs: 'first'
    }
});

app1.directive('secondDirective', function () {
    return {
        restrict: 'E',
        controller: function ($scope) {
            var vm= this;
            $scope.$on('val-change', function (e,data) {
                vm.data = data;
            });
            this.data = "Initial Value";
        },
        controllerAs: 'second'
    }
})



