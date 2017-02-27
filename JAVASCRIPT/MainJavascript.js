$(document).ready(function() {
    $("#MainNavigationEmbedding").load("SECTIONS/MainNavigation.php");
});

$(document).ready(function() {
    $('#content').load('/SECTIONS/HomeContents.php');

    $('#main_navigation_id').on('click', 'a', function(e) {
	alert('Detect');
	var pageName = $(this).attr('href');
	alert(pageName);
	$('#content').load('SECTIONS/' + pageName + '.php');
    });
});
