$(document).ready(function() {
    $.ajax({
	url:'https://api.github.com/users/hpmsora/repos',
	type:'GET',
	success: function(data){
	    $.each(data, function(index, value) {
		$('<a/>', {
		    href: value.html_url,
		    text: (index + 1) + ": " + value.name,
		    class: "WorkContent_ContentBox"
		}).css({
			"display":"inline-block",
			"width":"100%",
			"margin":"0px",
			"padding":"10px 0",
			"text-transform":"uppercase",
			
			"color":"#515151",
			"background":"#d3d3d3",
			"background":"-moz-linear-gradient(top,  #d3d3d3 0%, #8a8a8a 100%)",
			"background":"-webkit-gradient(linear, left top, left bottom, color-stop(0%,#d3d3d3), color-stop(100%,#8a8a8a))",
			"background":"-webkit-linear-gradient(top,  #d3d3d3 0%,#8a8a8a 100%)",
			"background":"-o-linear-gradient(top,  #d3d3d3 0%,#8a8a8a 100%)",
			"background":"-ms-linear-gradient(top,  #d3d3d3 0%,#8a8a8a 100%)",
			"background":"linear-gradient(top,  #d3d3d3 0%,#8a8a8a 100%)",

			"background":"#d3d3d3",
			"position":"relative",
			"text-align":"center",
			"text-decoration":"none",
			"font":"bold 15px/17px Arial, sans-serif",
	
			"text-shadow":"1px 1px 1px rgba(255,255,255, .22)",
	
			"-webkit-box-shadow":"1px 1px 1px rgba(0,0,0, .29), inset 1px 1px 1px rgba(255,255,255, .44)",
			"-moz-box-shadow":"1px 1px 1px rgba(0,0,0, .29), inset 1px 1px 1px rgba(255,255,255, .44)",
			"box-shadow":"1px 1px 1px rgba(0,0,0, .29), inset 1px 1px 1px rgba(255,255,255, .44)",
	
			"-webkit-transition":"all 0.15s ease",
			"-moz-transition":"all 0.15s ease",
			"-o-transition":"all 0.15s ease",
			"-ms-transition":"all 0.15s ease",
			"transition":"all 0.15s ease"
		}).appendTo(
		    $('<div/>', {
			class: 'WorkContent_InnerWrap_class',
			id: 'WorkContent_InnerWrap_class'
		    }).css({
			"width":"100%",
			"height":"100%",
			"mhttps://www.w3schools.com/jquery/jquery_dom_set.aspargin-bottom":"-100%"
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

$(".WorkContent_ContentBox").hover(function() {
	$(this).css({
		"-webkit-box-shadow":"1px 1px 1px rgba(0,0,0,.29), inset 0px 0px 2px rgba(0,0,0, .5)",
		"-moz-box-shadow":"1px 1px 1px rgba(0,0,0,.29), inset 0px 0px 2px rgba(0,0,0, .5)",
		"box-shadow":"1px 1px 1px rgba(0,0,0,.29), inset 0px 0px 2px rgba(0,0,0, .5)"
	})
});

