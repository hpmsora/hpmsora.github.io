$(document).ready(function() {
    $("#MainNavigationEmbedding").load("SECTIONS/MainNavigation.php");
});

$(document).ready(function() {
    $('#content').load('/SECTIONS/HomeContents.php');

    $('ul.main_navigation_class li').click(function(e) {
	alert('Detect');
	var pageName = $(this).attr('href');
	alert(pageName);
	$('#content').load('SECTIONS/' + pageName + '.php');
    });
});
