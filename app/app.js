


var App = angular.module('drag-and-drop', ['ngDragDrop']);

App.controller('formController', function($scope) {
  $scope.major = ""
  $scope.genEd = ""
  $scope.message = "Congratulations on your admission to USC! \n Let's plan out your curriculum over the next four years. \n Begin by selecting a major and a general education program."
  $scope.showForm = false;
  $scope.showReqs = true;
  $scope.addMajor = function(){
    if ($scope.genEd === "regular"){
    $('<div class = "course" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GE-A</div>').draggable({revert: 'invalid', snap: '.gridItem'}).appendTo("#dropzone");
    $('<div class = "course" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GE-B</div>').draggable({revert: 'invalid', snap: '.gridItem'}).appendTo("#dropzone");
    $('<div class = "course" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GE-B</div>').draggable({revert: 'invalid', snap: '.gridItem'}).appendTo("#dropzone");
    $('<div class = "course" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GE-C</div>').draggable({revert: 'invalid', snap: '.gridItem'}).appendTo("#dropzone");
    $('<div class = "course" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GE-C</div>').draggable({revert: 'invalid', snap: '.gridItem'}).appendTo("#dropzone");
    $('<div class = "course" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GE-D</div>').draggable({revert: 'invalid', snap: '.gridItem'}).appendTo("#dropzone");
    $('<div class = "course" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GE-E</div>').draggable({revert: 'invalid', snap: '.gridItem'}).appendTo("#dropzone");
    $('<div class = "course" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GE-F</div>').draggable({revert: 'invalid', snap: '.gridItem'}).appendTo("#dropzone");
    $('<div class = "course" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GE-G</div>').draggable({revert: 'invalid', snap: '.gridItem'}).appendTo("#dropzone");
    $('<div class = "course" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GE-H</div>').draggable({revert: 'invalid', snap: '.gridItem'}).appendTo("#dropzone");
    $scope.message = "Effective Fall 2015, all undergraduates at USC must satisfy the following degree requirements. Drag the classes below to your schedule."
  } else if ($scope.genEd = 'honors'){
    $('<div class = "course" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">Core 101</div>').draggable({revert: 'invalid', snap: '.gridItem'}).appendTo("#dropzone");
    $('<div class = "course" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">Core 102</div>').draggable({revert: 'invalid', snap: '.gridItem'}).appendTo("#dropzone");
    $('<div class = "course" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">Core 103</div>').draggable({revert: 'invalid', snap: '.gridItem'}).appendTo("#dropzone");
    $('<div class = "course" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">Core 104</div>').draggable({revert: 'invalid', snap: '.gridItem'}).appendTo("#dropzone");
    $('<div class = "course" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">Core 111</div>').draggable({revert: 'invalid', snap: '.gridItem'}).appendTo("#dropzone");
    $('<div class = "course" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">Core 112</div>').draggable({revert: 'invalid', snap: '.gridItem'}).appendTo("#dropzone");
    $('<div class = "course" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GE-A</div>').draggable({revert: 'invalid', snap: '.gridItem'}).appendTo("#dropzone");
    $('<div class = "course" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GE-C</div>').draggable({revert: 'invalid', snap: '.gridItem'}).appendTo("#dropzone");
    $('<div class = "course" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GE-F</div>').draggable({revert: 'invalid', snap: '.gridItem'}).appendTo("#dropzone");
    $('<div class = "course" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GE-E</div>').draggable({revert: 'invalid', snap: '.gridItem'}).appendTo("#dropzone");
    $scope.message = "Effective Fall 2015, all Thematic Option students must satisfy the following degree requirements. Drag the classes below to your schedule."
  }
  $scope.showForm = true;
  $scope.showReqs = false;
  }
  $scope.addReqs = function(){
    $scope.message = "Nice! Now let's add your major classes."
    $scope.showReqs = true;

  }
});
