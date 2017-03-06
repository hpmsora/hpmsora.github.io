$(document).ready(function() {
    $('<div/>', {
	class: 'test_class',
	id: 'test_id',
	
	text: "AA"
    }).appendTo('#content');
    $.ajax({
	url:"https://api.github.com/users/hpmsora/repos",
	type:'GET',
	success: function(data){
	    $('#content').html($(data).find('#content').html());
	}
    });
    $(".work_contents_wrap")
});
