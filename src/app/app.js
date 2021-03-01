var app1 = angular.module('app1', []);
app1.controller('ctrl1', ctrl1);

var myFunc = function () {
    this.name = "default name";
    this.$get = function () {
        this.name = "new name"
        return "Hello from MyFunc.$get(), this.name = " + this.name;
    };
    return "Hello from MyFunc(), this.name = " + this.name;
}

app1.factory('Sharing', function() {
    return {
        name: ''
    };
});

app1.service('myService', myFunc);
app1.factory('myFactory', myFunc);
app1.provider('myProv', myFunc);

function ctrl1($scope, myService, myFactory, myProv, $http, Sharing) {
    $scope.randomNum = Math.floor((Math.random() * 10) + 1);
    $scope.serviceOutput = "myService = " + myService;
    $scope.factoryOutput = "myFactory = " + myFactory;
    $scope.providerOutput = "myProvider = " + myProv;

    $http.get('data.js')
        .then(function (response) {
            $scope.jsondata = response.data;
            console.log("status:" + response.status);
        }).catch(function (response) {
        console.error('Error occurred:', response.status, response.data);
    }).finally(function () {
        console.log("Task Finished.");
    });

    $scope.data = Sharing;
};

app1.controller('ctrl2', ctrl2);

function ctrl2($scope, Sharing) {
$scope.data = Sharing;
}

