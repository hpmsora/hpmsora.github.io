$(document).ready(function() {
    $("#MainNavigationEmbedding").load("SECTIONS/MainNavigation.php");
});

$(document).ready(function() {
    $('#content').load('/SECTIONS/HomeContents.php');

    $('#C1').click(function() {
	alert('Detect');
	var pageName = $(this).attr('href');
	alert(pageName);
	$('#content').load('SECTIONS/' + pageName + '.php');
    });
});
