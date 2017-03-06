$(document).ready(function() {

    $.ajax({
	url:'https://api.github.com/users/hpmsora/repos',
	type:'GET',
	success: function(data){
	    $.each(data, function(index, value) {
		console.log(index);
		$('<div/>', {
		    class: 'test_class',
		    id: 'test_id',
		    
		    text: $('<a/>', {
			href: value.html_url,
			text: (index + 1) + ": " + value.name
		    })
		}).appendTo('#content');
	    });
	}
    });
});
