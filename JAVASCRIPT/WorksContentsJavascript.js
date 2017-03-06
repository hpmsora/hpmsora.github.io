$(document).ready(function() {
    $('<div/>', {
	class: 'test_class',
	id: 'test_id',
	
	text: $.get("https://api.github.com/users/hpmsora/repos")
    }).appendTo('#content');
    $(".work_contents_wrap")
});
