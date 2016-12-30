import { futurize, futurizeP } from 'futurize';
import Task from 'data.task';
import Either from 'data.either';
import Maybe from 'data.maybe';

import angular from 'angular';

import Box from './box';

angular.module('ng-folktale', [])
.service('ngFolktale', function Folktale() {
  this.Task = Task;
  this.Either = Either;
  this.Maybe = Maybe;
  this.Box = Box;

  this.futurize = futurize;
  this.futurizeP = futurizeP;

  this.tryCatch = f => {
    try {
      return this.Either.Right(f());
    } catch (e) {
      return this.Either.Left(e);
    }
  };

  this.fromNullable = x => {
    if (x != null) {
      return this.Either.Right(x);
    }
    return this.Either.Left(null);
  };
});
