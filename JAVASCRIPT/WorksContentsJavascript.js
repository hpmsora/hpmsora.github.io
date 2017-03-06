$(document).ready(function() {

    var contentsArray;
    var i;

    $.ajax({
	url:'https://api.github.com/users/hpmsora/repos',
	type:'GET',
	success: function(data){
	    contentsArray = data;
	    console.log(contentsArray);
	}
    });

    for (i = 0; i < contentsArray.size(); i++) {
	$('<div/>', {
	    class: 'test_class',
	    id: 'test_id',
	    
	    text: i + ": " + contentsArray[i].get('name')
	}).appendTo('#content');
    }
});
