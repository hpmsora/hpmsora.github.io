$(document).ready(function() {

    $.ajax({
	url:'https://api.github.com/users/hpmsora/repos',
	type:'GET',
	success: function(data){
	    $.each(data, function(index, value) {
		console.log("BBBB");
		console.log(index);
		$('<div/>', {
		    class: 'test_class',
		    id: 'test_id',
		    
		    text: index + ": " + value.name
		}).appendTo('#content');
	    });
	}
    });
    
    console.log("AAAAA");
    
    
});
