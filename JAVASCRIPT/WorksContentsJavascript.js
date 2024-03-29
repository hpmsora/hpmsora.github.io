$(document).ready(function() {
    $.ajax({
	url:'https://api.github.com/users/hpmsora/repos',
	type:'GET',
	success: function(data){
	    $.each(data, function(index, value) {

	    	var name = value.name;
	    	name = name.split('-').join(' ');
	    	name = name.split('   ').join(' - ');

	    	$('<span/>', {
	    		text: (index + 1)
	    	}).css({
	    		"white-space":"normal",
	    		"display":"block"
	    	}).appendTo(
		    	$('<a/>', {
			    	href: value.html_url,
			    	class: "WorkContent_ContentBox_" + index
			    }).mouseenter(function() {
			    	$(this).css({
			    		"-webkit-box-shadow":"1px 1px 1px rgba(0,0,0,.29), inset 0px 0px 2px rgba(0,0,0, .5)",
			    		"-moz-box-shadow": "1px 1px 1px rgba(0,0,0,.29), inset 0px 0px 2px rgba(0,0,0, .5)",
			    		"box-shadow": "1px 1px 1px rgba(0,0,0,.29), inset 0px 0px 2px rgba(0,0,0, .5)"
			    	})
			    }).mouseleave(function() {
			    	$(this).css({
			    		"-webkit-box-shadow":"1px 1px 1px rgba(0,0,0, .29), inset 1px 1px 1px rgba(255,255,255, .44)",
			    		"-moz-box-shadow":"1px 1px 1px rgba(0,0,0, .29), inset 1px 1px 1px rgba(255,255,255, .44)",
			    		"box-shadow":"1px 1px 1px rgba(0,0,0, .29), inset 1px 1px 1px rgba(255,255,255, .44)"
			    	})
			    }).css({
			    	"display":"inline-block",
					"width":"100%",
					"height":"100%",
					"margin":"0px",
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
					"font":"bold 12px Arial, sans-serif",
			
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
						id: 'WorkContent_InnerWrap_id'
					}).css({
						"width":"20vw",
						"height":"20vw",
						"max-width":"190px",
						"max-height":"100px",
						"mhttps://www.w3schools.com/jquery/jquery_dom_set.aspargin-bottom":"-100%"
					}).appendTo(
						$('<div/>', {
							class: 'WorkContent_OuterWrap_class',
							id : 'WorkContent_OuterWrap_id'
						}).css({
						    "width":"25%",
						    "max-width":"190px",
						    "float":"left"
				  		}).appendTo('.work_contents_wrap')
					)
				)
			)

			$('<span/>', {
				text: name
			}).css({
				"white-space":"normal",
    			"display":"block"
			}).appendTo('.WorkContent_ContentBox_' + index)

		});
	  }
	});
});