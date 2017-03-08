var todoAppFilters = angular.module('todoApp.filters', []);

todoAppFilters.filter('puntjesToevoegen', function() {
	
	return function(input) {
		//HIER KOMT JE LOGICA
		console.log(input);
		if(input.length < 50) {
			while(input.length<50) {
				input += ".";
			}
		}

		return input;
	};

});