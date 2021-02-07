import './css/styles.css';
var app1 = angular.module('app1',[]);

app1.controller('ctrl1', ctrl1);

function ctrl1($scope) {
    $scope.randomNum = Math.floor((Math.random() * 10) + 1);
    var vm = this;
    vm.startClock = startClock;
    function startClock() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        var d = today.getUTCDate();
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        var mon = monthNames[today.getMonth()];
        var y = today.getFullYear()
        m = checkTime(m);
        s = checkTime(s);
        d = checkDate(d);
        h = hourCheck(h);
        var ampm = currentTime(ampm);
        var g = checkGreeting(g);
        document.getElementById('clock').innerHTML = h + ":" + m + ":" + s + " " + ampm;
        document.getElementById('date').innerHTML = d + " " + mon + " " + y;
        document.getElementById('greeting').innerHTML = "Good " + g;
        var t = setTimeout(startClock, 500);
    }

    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return (i);
    }

    function checkDate(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return (i);
    }

    function checkGreeting(i) {
        var time = new Date().getHours();
        if (time < 12) {
            i = "Morning";
        } else if (time < 16) {
            i = "Afternoon";
        } else {
            i = "Evening";
        }
        return i;
    }

    function currentTime(i) {
        var period = new Date().getHours();
        if (period < 12) {
            i = "AM";
        } else {
            i = "PM";
        }
        return i;
    }

    function hourCheck(i) {
        i = ((i == 0) ? 12 : ((i > 12) ? i - 12 : i));
        return i;
    }
    startClock();
};


