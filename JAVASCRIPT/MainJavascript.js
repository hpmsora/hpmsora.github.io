$(document).ready(function() {
    $("#MainNavigationEmbedding").load("SECTIONS/MainNavigation.php");
});

$(document).ready(function() {
    $('#content').load('/SECTIONS/HomeContents.php');

    $('#main_navigation_id li a').click(function() {
	var pageName = $(this).attr('href');
	alert(pageName);
	$('#content').load('SECTIONS/' + pageName + '.php');
    });
});
