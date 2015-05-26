'use strict';

/**
 * @ngdoc function
 * @name boltApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the boltApp
 */
angular.module('boltApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
