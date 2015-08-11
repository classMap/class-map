

var App = angular.module('drag-and-drop', ['ngDragDrop']);

App.controller('OverviewCtrl', function($scope) {
  $scope.list1 = {title: 'AngularJS - Drag Me'};
  $scope.list2 = {};
});
