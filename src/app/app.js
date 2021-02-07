(function () {
    var dataitems = document.querySelectorAll('[two-way-data-bind]'),
        scope = {};
    dataitems.forEach(function (ele) {
        if(ele.type === 'text') {
            var bindData = ele.getAttribute('two-way-data-bind');
            addBindScope(bindData);
            ele.onkeyup = function () {
                scope[bindData] = ele.value;
            }
        }
        function addBindScope(items) {
            if(!scope.hasOwnProperty(items)){
                var value;
                Object.defineProperty(scope,items, {
                    set: function (new_value) {
                        dataitems.forEach(function (ele) {
                            if (ele.getAttribute('two-way-data-bind') === items) {
                                if(ele.type === 'text') {
                                    ele.value = new_value;
                                }
                                else if(!ele.type) {
                                    ele.innerHTML = new_value;
                                }
                            }
                        });
                    },
                    get: function () {
                        return value;
                    },
                    enumerable: true
                })
            }
        }
    });
})();