Just an angular start app.

$watch()
The $scope.watch() function is used to observe changes in a variable on the $scope.
It accepts three parameters : expression, listener and equality object where listener and equality object
are optional parameters.

$digest()
The $scope.$digest() function iterates through all the watches in the $scope object,
 and its child $scope objects (if it has any). When $digest() iterates over the watches,
 it checks if the value of the expression has changed.
 If the value has changed, AngularJS calls the change callback(listener) with the new value and the old value.


 $apply()
 Angular do auto-magically updates only those model changes which are inside AngularJS context.
 When you do change in any model outside of the Angular context (like browser DOM events, setTimeout, XHR or third party libraries),
 then you need to inform Angular of the changes by calling $apply() manually.
 When the $apply() function call finishes AngularJS calls $digest() internally, so all data bindings are updated.


Note

$digest() is faster than $apply(), since $apply() triggers watchers on the entire scope chain while $digest()
triggers watchers on the current scope and its children(if it has).

When error occurs in one of the watchers, $digest() can not handled errors via $exceptionHandler service,
In this case you have to handle exception yourself. While $apply() uses try catch block internally
to handle errors and if error occurs in one of the watchers then it passes errors to $exceptionHandler service.