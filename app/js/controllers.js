'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope','$http', function($scope, $http) {
    $http.get('dates/dates.json').success(function(data){
      $scope.dates = data
    });

    var i = 3
    $scope.addPost = function(date){
      $scope.dates.push(date.date)
      console.log($scope.dates[i])
      console.log($scope.dates.length)
      date.date = {};
      i++
    }

    $scope.orderProp = '-day'
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
  // .controller('DateController', function(){
  //   this.date = {};
  //   this.addNewDate = function(product){
  //     console.log(this.product)
  //   };
  // });
