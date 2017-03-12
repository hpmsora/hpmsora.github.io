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
		}).css({
		    "text-decoration":"none",
		    "font-size":"20px",
		    "text-deconation":"none"
		}).appendTo(
		    $('<div/>', {
			class: 'WorkContent_InnerWrap_class',
			id: 'WorkContent_InnerWrap_class'
		    }).css({
			"width":"100%",
			"height":"100%",
			"margin-bottom":"-100%"
		    }).appendTo(
			$('<div/>', {
			    class: 'WorkContent_OuterWrap_class',
			    id : 'WorkContent_OuterWrap_id'
			}).css({
			    "width":"25%",
			    "float":"left",
			    "padding-bottom":"25%",
			    "border-style":"solid", 
			    "border-width":"1px",
			    "box-sizing":"border-box",
			    "-moz-box-sizing":"border-box",
			    "-webkit-box-sizing":"border-box"
			}).appendTo('.work_contents_wrap')
		    )
		)
	    });
	}
    });
});
