$(document).ready(function() {

	var items = JSON.parse(localStorage.getItem("items")) || []; //Check if there is a valid array of items in the localstorage. Otherwise assign an empty array to the var.

	items.forEach(function(e) { //Loop trough all existing items in the array.
		$('tbody').append('<tr><td>' + e + '</td></tr>'); //Append all existing items to the table with html.
	});


	$('#submitBtn').on('click', function(event) {

		event.preventDefault(); //Prevent default action (page reload) when the button is clicked.

		var item = $('input[name=item]').val(); //Get the value of the item input field.

		items.push(item); //Add the new item to the items array.

		localStorage.setItem("items", JSON.stringify(items)); //Save the items array to the localstorage.

		$('tbody').append('<tr><td>' + item + '</td></tr>'); //Append the new item to the table with html.

		$('input[name=item]').val(""); //Empty the item input field.
	});

});