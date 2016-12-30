import { futurize, futurizeP } from 'futurize';
import Task from 'data.task';
import Either from 'data.either';
import Maybe from 'data.maybe';

import angular from 'angular';

import Box from './box';

angular.module('ng-folktale', [])
.service('ngFolktale', ['$http', function Folktale($http) {
  this.Task = Task;
  this.Either = Either;
  this.Maybe = Maybe;
  this.Box = Box;


  this.futurize = futurize;
  this.futurizeP = futurizeP;

  this.futureP = this.futurizeP(this.Task);
  this.future = this.futurize(this.Task);

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

  this.$http = args => this.futureP($http)(args);

  this.getData = obj => obj.data;
}]);
