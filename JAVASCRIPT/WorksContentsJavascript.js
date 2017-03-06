$(document).ready(function() {

    var $contentsArray = [];

    $.ajax({
	url:'https://api.github.com/users/hpmsora/repos',
	type:'GET',
	success: function(data){
	    $contentsArray = data;
	    console.log($contentsArray);
	}
    });

    console.log("AAAAA");
    
    $.each($contentsArray, function(index, value) {
	console.log(index);
	$('<div/>', {
	    class: 'test_class',
	    id: 'test_id',
	    
	    text: index + ": " + value.get('name')
	}).appendTo('#content');
    });
});
