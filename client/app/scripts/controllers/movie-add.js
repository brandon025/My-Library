'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieAddCtrl
 * @description
 * # MovieAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('MovieAddCtrl', function ($scope, Movie, $location) {
      $scope.movie = {};
      $scope.saveMovie = function() {
          //promises
        Movie.post($scope.movie).then(function() {
            //set link to go to /movies
          $location.path('/movies');
        });
      };
    });
