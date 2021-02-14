var app1 = angular.module('app1',[]);
app1.controller('ctrl1', ctrl1);

var myFunc = function() {
    this.name = "default name";
    this.$get = function() {
        this.name = "new name"
        return "Hello from MyFunc.$get(), this.name = " + this.name;
    };
    return "Hello from MyFunc(), this.name = " + this.name;
}


app1.service( 'myService', myFunc );
app1.factory( 'myFactory', myFunc );
app1.provider( 'myProv', myFunc );

function ctrl1($scope, myService, myFactory, myProv) {
    $scope.randomNum = Math.floor((Math.random() * 10) + 1);
    $scope.serviceOutput = "myService = " + myService;
    $scope.factoryOutput = "myFactory = " + myFactory;
    $scope.providerOutput = "myProvider = " + myProv;
};


