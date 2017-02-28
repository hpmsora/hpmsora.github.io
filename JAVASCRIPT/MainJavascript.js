$(document).ready(function() {
    $("#MainNavigationEmbedding").load("SECTIONS/MainNavigation.php");
    $('#content').load('/SECTIONS/HomeContents.php');
});

$(document).ready(function() {
    $('.main_navigation_class li').on("click", function() {
	alert('Detect');
	var pageName = $(this).attr('href');
	alert(pageName);
	$('#content').load('SECTIONS/' + pageName + '.php');
    });
});
