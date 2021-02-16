Just an angular start app.

$q - Promise - handles asynchronous tasks.

eg , if an http call completes in 300ms or 500ms, in whatever time, promise will execute when resolved.

Promise has 3 states- Pending , Resolved and Rejected.

ES 2015-  let promise = new Promise(resolve, reject)
AngularJS-let promise = $q(resolve, reject)

$q.defer(), this creates a new instance of deferred and is a promise Constructor.

has three methods-

resolve(value) -  resolves the promise with a value
reject(reason)  - rejects the promise with a mssg or some reason.(error).
notify(value)  - provides update on status of promise , can be called any number of times before promise either gets resolved or rejected.