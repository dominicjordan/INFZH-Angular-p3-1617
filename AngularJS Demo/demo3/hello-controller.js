var module = angular.module('helloModule', []);

module.controller('helloController', function($scope) {
  	
  	$scope.teachers = [
  		{lastname:"Cocx"},
  		{lastname:"Loke"},
  		{lastname:"Jahangier"},
  		{lastname:"Broeren"},
  	];

});