'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope','$http', function($scope, $http) {
    $http.get('dates/dates.json').success(function(data){
      $scope.dates = data
    });



    $scope.addPost = function(name,place,day,stars,back){
      $scope.dates.push({name: name, place: place, day: day, stars: stars, back: back})
      console.log($scope.dates[3])
      console.log($scope.dates.length)
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
