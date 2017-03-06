$(document).ready(function() {
    $('<div/>', {
	class: 'test_class',
	id: 'test_id',
	
	text: $.ajax({ url: 'https://api.github.com/users/hpmsora/repos', success: function(data) { alert(data); } });,
    }).appendTo('#content');
    $(".work_contents_wrap")
});
