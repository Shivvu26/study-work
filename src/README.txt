Just an angular start app.

Predefined Directives:
ng-app, ng-init , ng-repeat, ng-model, ng-change, ng-bind...etc




Custom Directives:

we can invoke a directive by using

Element name            <test-directive></test-directive>
Attribute               <div test-directive></div>
Class                   <div class="test-directive"></div>
Comment                 <!-- directive: test-directive -->

By adding a restrict property with the value "A", the directive can only be invoked by attributes.

The legal restrict values are:

E for Element name
A for Attribute
C for Class
M for Comment
By default the value is EA, meaning that both Element names and attribute names can invoke the directive.