var App = angular.module('main', ['ngDragDrop'])

App.controller('formController', function($scope, $http) {
  $scope.major = ""
  $scope.genEd = ""
  $scope.message = "Congratulations on your admission to the USC Dornsife College of Letters, Arts and Sciences! \n Let's plan out your curriculum over the next four years. \n Begin by selecting a major and a general education program."
  $scope.showForm = false;
  $scope.showReqs = true;
  $scope.showElec = true;
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
    //sends request to server which returns classes array for user's major, iterates over array to create course divs
    var major = {major: $scope.major};
    $http.post('/majors', major).then(function(data){
      var classes = data.data.classes;
      for (var i=0; i<classes.length; i++){
        var text = classes[i];
        $('<div class = "course" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}"></div>').append(text).draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#"+(i+1));
      }
    });

    //creates regular general education program courses
    if ($scope.genEd === "regular"){
    $('<div class = "ge" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GSEM</div>').draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#0");
    $('<div class = "ge" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GE-B</div>').draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#dropzone");
    $('<div class = "ge" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GE-B</div>').draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#dropzone");
    $('<div class = "ge" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GE-C</div>').draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#dropzone");
    $('<div class = "ge" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GE-C</div>').draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#dropzone");
    $('<div class = "ge" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GE-D</div>').draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#dropzone");
    $('<div class = "ge" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GE-E</div>').draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#dropzone");
    $('<div class = "ge" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GE-F</div>').draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#dropzone");
    $('<div class = "ge" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GE-G</div>').draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#dropzone");
    $('<div class = "ge" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GE-H</div>').draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#dropzone");
    $('<p class = "geinfo"> Further information about the General Education program can be found at <a href= "http://dornsife.usc.edu/2015ge/2015ge-requirements/"> www.dornsife.usc.edu/2015ge/2015ge-requirements/ </a></p>').appendTo("#form");
    $('<p class = "geinfo"> NOTE: All freshmen must enroll in a General Education Seminar (GSEM) in their first year which satisfies one GE requirement. Here, it is satisfying the GE-A requirement.</p>').appendTo("#form");

    $scope.message = "Effective Fall 2015, all undergraduates at USC must satisfy the following degree requirements. Drag the classes below to your schedule. If you have already satisfied a requirement, you can drag things to the trash can to delete them."
    //creates honors program courses
  } else if ($scope.genEd = 'honors'){
    $('<div class = "ge" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">Core 101</div>').draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#dropzone");
    $('<div class = "ge" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">Core 102</div>').draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#dropzone");
    $('<div class = "ge" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">Core 103</div>').draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#dropzone");
    $('<div class = "ge" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">Core 104</div>').draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#dropzone");
    $('<div class = "ge" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">Core 111</div>').draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#dropzone");
    $('<div class = "ge" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">Core 112</div>').draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#dropzone");
    $('<div class = "ge" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GE-A</div>').draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#dropzone");
    $('<div class = "ge" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GE-C</div>').draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#dropzone");
    $('<div class = "ge" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GE-F</div>').draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#dropzone");
    $('<div class = "ge" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}">GE-E</div>').draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#dropzone");
    $scope.message = "Effective Fall 2015, all Thematic Option students must satisfy the following degree requirements. Drag the classes below to your schedule. Drag things to the trash can to delete them."
  }
  $scope.showForm = true;
  $scope.showReqs = false;
  }
  $scope.addReqs = function(){
    $(".geinfo").remove();
    $scope.message = "Nice! With your remaining credits, let's add some free classes or a minor!"
    $scope.showReqs = true;
    $scope.showElec = false;

  }
  $scope.addElecs = function(){
    var elec1 = $scope.elec1;
    var elec2 = $scope.elec2;
    var elec3 = $scope.elec3;
    var elec4 = $scope.elec4;
    var elec5 = $scope.elec5;
    if (elec1){
      $('<div class = "elective" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}"></div>').append(elec1).draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#form");
      $scope.elec1 = "";
    }
    if (elec2){
      $('<div class = "elective" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}"></div>').append(elec2).draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#form");
      $scope.elec2 = "";
    }
    if (elec3){
      $('<div class = "elective" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}"></div>').append(elec3).draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#form");
      $scope.elec3 = "";
    }
    if (elec4){
      $('<div class = "elective" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}"></div>').append(elec4).draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#form");
      $scope.elec4 = "";
    }
    if (elec5){
      $('<div class = "elective" data-drag="true" data-drop = "true"  jqyoui-draggable="{animate: true}"></div>').append(elec5).draggable({revert: 'invalid', snap: '.gridItem', snapTolerance: 50}).appendTo("#form");
      $scope.elec5 = "";
    }
  }
});
