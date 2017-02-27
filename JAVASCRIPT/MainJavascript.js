$(document).ready(function() {
    $("#MainNavigationEmbedding").load("SECTIONS/MainNavigation.php");
});

$(document).ready(function() {
    $('#content').load('/SECTIONS/home.php');

    /*$('ul#main_navigation_class li a').click(function() {
	var pageName = $(this).attr('href');
	$('#content').load('/SECTIONS/' + pageName + '.php');
    });*/
});
