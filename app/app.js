var App = angular.module('main', ['ngDragDrop']);

App.controller('formController', function($scope) {
  $scope.major = ""
  $scope.genEd = ""
  $scope.message = "Congratulations on your admission to USC! \n Let's plan out your curriculum over the next four years. \n Begin by selecting a major and a general education program."
  $scope.showForm = false;
  $scope.showReqs = true;
  $scope.addMajor = function(){
    if (!$scope.major || !$scope.genEd){
      alert("Sorry, you need to select a major and a GE program");
      location.reload();
    }
    //activates the trash can
    $('#trash').droppable({
          drop: function(event, ui) {
              $(ui.draggable).remove();
          }
      });
    //make get request to server
    //server returns object matching $scope.major
    //iterate over array and create divs and append to grid 
    if ($scope.genEd === "regular"){
    $('<div class = "course" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GSEM</div>').draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#firstItem");
    $('<div class = "course" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GE-B</div>').draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#dropzone");
    $('<div class = "course" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GE-B</div>').draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#dropzone");
    $('<div class = "course" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GE-C</div>').draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#dropzone");
    $('<div class = "course" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GE-C</div>').draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#dropzone");
    $('<div class = "course" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GE-D</div>').draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#dropzone");
    $('<div class = "course" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GE-E</div>').draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#dropzone");
    $('<div class = "course" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GE-F</div>').draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#dropzone");
    $('<div class = "course" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GE-G</div>').draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#dropzone");
    $('<div class = "course" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GE-H</div>').draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#dropzone");
    $('<p class = "geinfo"> Further information about the General Education program can be found at <a href= "http://dornsife.usc.edu/2015ge/2015ge-requirements/"> www.dornsife.usc.edu/2015ge/2015ge-requirements/ </a></p>').appendTo("#form");
    $('<p class = "geinfo"> NOTE: All freshmen must enroll in a General Education Seminar (GSEM) in their first year which satisfies one GE requirement. Here, it is satisfying the GE-A requirement.</p>').appendTo("#form");

    $scope.message = "Effective Fall 2015, all undergraduates at USC must satisfy the following degree requirements. Drag the classes below to your schedule. Drag things to the trash can to delete them."
  } else if ($scope.genEd = 'honors'){
    $('<div class = "course" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">Core 101</div>').draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#dropzone");
    $('<div class = "course" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">Core 102</div>').draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#dropzone");
    $('<div class = "course" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">Core 103</div>').draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#dropzone");
    $('<div class = "course" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">Core 104</div>').draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#dropzone");
    $('<div class = "course" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">Core 111</div>').draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#dropzone");
    $('<div class = "course" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">Core 112</div>').draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#dropzone");
    $('<div class = "course" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GE-A</div>').draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#dropzone");
    $('<div class = "course" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GE-C</div>').draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#dropzone");
    $('<div class = "course" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GE-F</div>').draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#dropzone");
    $('<div class = "course" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GE-E</div>').draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#dropzone");
    $scope.message = "Effective Fall 2015, all Thematic Option students must satisfy the following degree requirements. Drag the classes below to your schedule. Drag things to the trash can to delete them."
  }
  $scope.showForm = true;
  $scope.showReqs = false;
  }
  $scope.addReqs = function(){
    $(".geinfo").remove();
    $scope.message = "Nice! Now let's add your major classes."
    $scope.showReqs = true;

  }
});
