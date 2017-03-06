$(document).ready(function() {
    $('<div/>', {
	class: 'test_class',
	id: 'test_id',
	
	text: "AA"
    }).appendTo('#content');
    $.ajax({
	url:'https://api.github.com/users/hpmsora/repos',
	type:'GET',
	success: function(data){
	    console.log(data);
	}
    });
    $(".work_contents_wrap")
});
