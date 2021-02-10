Just an angular start app.

$scope
AngularJS creates and injects a different $scope object to each controller in an application.
So, the data and methods attached to $scope inside one controller cannot be accessed in another controller.
With the nested controller, child controller will inherit the parent controller's scope object.
Therefore, child controller can access properties added in parent controller but parent controller cannot access properties added in child controller.

$rootscope
An AngularJS application has a single $rootScope. All the other $scope objects are child objects.
The properties and methods attached to $rootScope will be available to all the controllers.

this
It keeps it locally available to that function and code is clean when using it, also reduces confusion when using controller's methods or values in function
by defining the controller name and makes it easy, understandable.