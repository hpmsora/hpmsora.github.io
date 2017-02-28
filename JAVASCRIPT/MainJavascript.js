$(document).ready(function() {
    $("#MainNavigationEmbedding").load("SECTIONS/MainNavigation.php");
    $('#content').load('/SECTIONS/HomeContents.php');
    $("a").click(function() {
	alert('Detect');
	//var pageName = $(this).attr('href');
	//alert(pageName);
	//$('#content').load('SECTIONS/' + pageName + '.php');
    });
});
