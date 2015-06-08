'use strict';

/**
 * @ngdoc function
 * @name bandersnatchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bandersnatchApp
 */
angular.module('bandersnatchApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
