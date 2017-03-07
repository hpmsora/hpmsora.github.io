$(document).ready(function() {

    $.ajax({
	url:'https://api.github.com/users/hpmsora/repos',
	type:'GET',
	success: function(data){
	    $.each(data, function(index, value) {
		console.log(index);
		$('<a/>', {
		    href: value.html_url,
		    text: (index + 1) + ": " + value.name
		}).appendTo(
		    $('<div/>', {
			class: 'test_class',
			id: 'test_id'
		    }).css({"width":"100%", "height":"200px"}).appendTo('#content'))
	    });
	}
    });
});
