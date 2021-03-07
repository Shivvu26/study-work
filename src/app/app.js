
var app1 = angular.module('app1',['ngRoute']);

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
        templateUrl: 'sec.html'
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
});

app1.controller('controllers',function($scope) {

    $scope.features = [
        {Name:"Two Way Data Binding",Description :"AngularJS two-way data-binding manages the synchronization amid the DOM and the model."},
        {Name:"MVC",Description :"AngularJS does not implement Model-View-Controller (MVC) in the conventional sense, but rather something closer to MVVM (Model-View-View Model)."},
        {Name:" Dependency Injection",Description :"AngularJS has a default and built-in dependency injection subsystem that assists the developers by enabling the app simpler to build and test."},
        {Name:" Directives",Description :"Directives are a feature of AngularJS which can be utilized to build custom HTML tags that serve as new as well as custom widgets"}
    ]
});

app1.controller('directives',function($scope){

    $scope.features = [
        {Name:"JSX",Description :"JSX stands for JavaScript XML. It is a JavaScript syntax extension. Its an XML or HTML like syntax used by ReactJS."},
        {Name:"Components",Description :"ReactJS is all about components. ReactJS application is made up of multiple components, and each component has its own logic and controls."},
        {Name:"One-way Data Binding",Description :"ReactJS is designed in such a manner that follows unidirectional data flow or one-way data binding."},
        {Name:"Virtual DOM",Description :"A virtual DOM object is a representation of the original DOM object. It works like a one-way data binding."}
    ]
});

app1.config(['$routeProvider','$locationProvider',
function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/Controllers', {
        templateUrl: 'dir.html',
        controller: 'controllers'
    })
        .when('/Directives', {
        templateUrl: 'sec.html',
        controller: 'directives'
    })

    $locationProvider.html5Mode(true);
}]);



