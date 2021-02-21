
var app1 = angular.module('app1',[]);

app1.controller('ctrl1', ctrl1);

function ctrl1($scope) {
    $scope.randomNum = Math.floor((Math.random() * 10) + 1);
    $scope.firstname = "shivank";
    $scope.lastname = "mishra";

    $scope.names = [
        'Ariel','Brandy','Bruno','Agasta','Carry','Danny','Juno','Katy','Lucky','Shawn','Zoro','Mandy','Pushp','Tiny'
    ];

    $scope.salary_amount = 50000;

    $scope.data = 'Hi Viewer, '
};
app1.filter('cust_filter', function () {
    return function (input) {
        return input + "before comma words are added to this sentence using custom filter."
    }
});


