'use strict';

/**
 * @ngdoc function
 * @name bandersnatchApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bandersnatchApp
 */
angular.module('bandersnatchApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
