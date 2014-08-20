'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope','$http', function($scope, $http) {
    $http.get('dates/dates.json').success(function(data){
      $scope.dates = data
    });

    $scope.orderProp = 'name'
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
