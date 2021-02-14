Just an angular start app.


Angular provides us with three ways to create and register our own service.

1) Factory

2) Service

3) Provider

Factory: A factory is a simple function which allows you to add some logic before creating the object. It returns the created object.
It is just a collection of functions like a class. Hence, it can be instantiated in different controllers when you are using it with constructor function.


Service: A service is a constructor function which creates the object using new keyword.
You can add properties and functions to a service object by using this keyword.
Unlike factory, it doesn’t return anything.
It is a singleton object. Use it when you need to share a single object across the application. For example, authenticated user details.


Provider: A provider is used to create a configurable service object. It returns value by using $get() function.
When you need to provide module-wise configuration for your service object before making it available.