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
			class: 'WorkContent_InnerWrap_class',
			id: 'WorkContent_InnerWrap_class'
		    }).css({
			"width":"100%",
			"height":"100%",
			"border-style":"solid", 
			"border-width":"1px",
		    }).appendTo(
			$('<div/>', {
			    class: 'WorkContent_OuterWrap_class',
			    id : 'WorkContent_OuterWrap_id'
			}).css({
			    "width":"25%",
			    "float":"left",
			    "padding-bottom":"25%"
			}).appendTo('.work_contents_wrap')
		    )
		)
	    });
	}
    });
});
