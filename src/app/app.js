
var app1 = angular.module('app1',[]);

app1.controller('ctrl1', ctrl1);

function ctrl1($scope,$q) {
    $scope.randomNum = Math.floor((Math.random() * 10) + 1);

    var text = 'Testing';

    function usePromiseExample() {
        var deferred = $q.defer();
        if(text == 'Testing') {
            deferred.resolve('Resolve working');
        } else {
            deferred.reject('Something is not right and this is reject');
        }

        return deferred.promise;
    }

    usePromiseExample().then(function (data) {
        alert(data);
    })
};


