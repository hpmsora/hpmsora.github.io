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
		    }).css({"width":"24%", "padding-top":"25%", "border-style":"solid", "border-width":"1px", "float":"left"}).appendTo('#content'))
	    });
	}
    });
});
