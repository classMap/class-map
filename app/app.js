


var App = angular.module('drag-and-drop', ['ngDragDrop']);

App.controller('formController', function($scope) {
  $scope.major = ""
  $scope.message = "Congratulations on your admission to USC! \n Let's plan out your curriculum over the next four years. \n Begin by selecting a major."
  $scope.showForm = false;
  $scope.addMajor = function(){
    $('<div class = "course" data-drag="true" data-drop = "true" data-jqyoui-options = "{revert: \'invalid\'}" jqyoui-draggable="{animate: true}">GE-A</div>').draggable().appendTo("#form");
    $('<div class = "course" data-drag="true" data-drop = "true" data-jqyoui-options = "{revert: \'invalid\'}" jqyoui-draggable="{animate: true}">GE-B</div>').draggable().appendTo("#form");
    $('<div class = "course" data-drag="true" data-drop = "true" data-jqyoui-options = "{revert: \'invalid\'}" jqyoui-draggable="{animate: true}">GE-B</div>').draggable().appendTo("#form");
    $('<div class = "course" data-drag="true" data-drop = "true" data-jqyoui-options = "{revert: \'invalid\'}" jqyoui-draggable="{animate: true}">GE-C</div>').draggable().appendTo("#form");
    $('<div class = "course" data-drag="true" data-drop = "true" data-jqyoui-options = "{revert: \'invalid\'}" jqyoui-draggable="{animate: true}">GE-C</div>').draggable().appendTo("#form");
    $('<div class = "course" data-drag="true" data-drop = "true" data-jqyoui-options = "{revert: \'invalid\'}" jqyoui-draggable="{animate: true}">GE-D</div>').draggable().appendTo("#form");
    $('<div class = "course" data-drag="true" data-drop = "true" data-jqyoui-options = "{revert: \'invalid\'}" jqyoui-draggable="{animate: true}">GE-E</div>').draggable().appendTo("#form");
    $('<div class = "course" data-drag="true" data-drop = "true" data-jqyoui-options = "{revert: \'invalid\'}" jqyoui-draggable="{animate: true}">GE-F</div>').draggable().appendTo("#form");
    $('<div class = "course" data-drag="true" data-drop = "true" data-jqyoui-options = "{revert: \'invalid\'}" jqyoui-draggable="{animate: true}">GE-G</div>').draggable().appendTo("#form");
    $('<div class = "course" data-drag="true" data-drop = "true" data-jqyoui-options = "{revert: \'invalid\'}" jqyoui-draggable="{animate: true}">GE-H</div>').draggable().appendTo("#form");
    $scope.message = "Effective Fall 2015, all undergraduates at USC must satisfy the following degree requirements. Add the GE classes below to your schedule."
    $scope.showForm = true;
  }
});
