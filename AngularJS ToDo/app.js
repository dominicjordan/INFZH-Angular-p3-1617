var module = angular.module('todoApp', ['todoApp.filters']);

module.controller('todoController', function($scope) {
	//HIER KOMT JE INHOUD :'D

	$scope.categories = ["Groceries", "Work", "School", "Lunch"];


	var localItems = JSON.parse(localStorage.getItem("items"));

	if(localItems != undefined && localItems.length>0) {
		$scope.items = localItems;
	}
	else {
		$scope.items = [
			{name:"Milk", checked:false, category:"Groceries"},
			{name:"Eggs", checked:false, category:"Groceries"},
			{name:"Cheese", checked:true, category:"Groceries"},
			{name:"Do Homework", checked:false, category:"School"},
			{name:"Buy pencils", checked:true, category:"School"},
			{name:"Copy code from codebin", checked:false, category:"School"},
			{name:"Make an Angular test", checked:false, category:"Work"},
			{name:"Push code to Github", checked:false, category:"Work"},
			{name:"Yet Another Item", checked:true, category:"Work"}
		];
	}

	$scope.deleteItem = function(item) {

		var deleteIndex = -1;
		$scope.items.forEach(function(e, i) {
			if(e.name === item.name) {
				deleteIndex = i;
			}
		});

		$scope.items.splice(deleteIndex, 1);

		localStorage.setItem("items", JSON.stringify($scope.items));
	};

	$scope.saveNewItem = function() {
		console.log($scope.newItem);

		$scope.items.push({
			name: $scope.newItem.name,
			category: $scope.newItem.category,
			checked: false
		});

		$scope.newItem = {};

		localStorage.setItem("items", JSON.stringify($scope.items));
	};

	$scope.updateItem = function(item) {
		item.updating=false;

		localStorage.setItem("items", JSON.stringify($scope.items));
	};



});