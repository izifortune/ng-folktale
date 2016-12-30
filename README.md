#ng-folktale

A collection of folktale data structures and other utilities for functional programming all wrapped into AngularJS service.

This is just a wrapper of https://github.com/folktale for AngularJS, with the addition of some utilities.

##Installation

`npm i --save ng-folktale`

Or if you are not using a module loader just include
ng-folktale.min.js in your html.

##Use

```javascript
import 'ng-folktale'; //If you use a module loader

angular.module('app', ['ng-folktale'])
...
.service('MyService', function(ngFolktale) {
  ngFolktale.Box(1);
});
```

##Data structures

###Box
*Box*. 

###Either
*Either* structure represents the logical disjunction between. For any other information or usage:

https://github.com/folktale/data.either

###Maybe
*Maybe* A structure for values that may not be present. For any other information or usage:

https://github.com/folktale/data.maybe

###Task

*Task* is a structure represents values that depend on time. For any other information or usage:

https://github.com/folktale/data.task

##Utils

###futurize

A small library to convert callback or promise based functions into `Task`;

To have a look on how to use it please follow: https://github.com/futurize/futurize

####fromNullable(value)

retuns a `Left` if the argument its `null` or `undefined` otherwise a `Right`.

***Arguments:***

* `value` *any*, any value that needs to be checked against `null` or `undefined`.

***Returns***

`Right` if the *value* is different from `undefined` or `null`, `Left` otherwise.

eg:

```javascript
...
ngFolktale.fromNullable(null) // Left(null)

ngFolktale.fromNullable(12) //Right(12)
```

####tryCatch(expression)

A functional try/catch when you really need to use it.

***Arguments:***

* `expression` *(Function)*, the function that needs to be evaluated inside the try/catch; 

***Returns***

`Right` if there are no errors raised.
`Left` if an error occurred.

eg:

```javascript
...
var a = { b: 1 };
ngFolktale.tryCatch(() => a.testing); //Left(error)

ngFolktale.tryCatch(() => a.b); // Right(1)
```

Inspired by https://egghead.io/courses/professor-frisby-introduces-composable-functional-javascript.
