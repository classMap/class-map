


var App = angular.module('drag-and-drop', ['ngDragDrop']);

App.controller('formController', function($scope) {
  $scope.major = ""
  $scope.addMajor = function(){
    alert($scope.major);
  }
});
