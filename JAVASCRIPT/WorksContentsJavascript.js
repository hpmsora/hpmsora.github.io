$(document).ready(function() {

    var contentsArray;
    
    $('<div/>', {
	class: 'test_class',
	id: 'test_id',
	
	text: "AAAAA"
    }).appendTo('#content');
    $.ajax({
	url:'https://api.github.com/users/hpmsora/repos',
	type:'GET',
	success: function(data){
	    contentsArray = data;
	    console.log(contentsArray);
	}
    });
});
