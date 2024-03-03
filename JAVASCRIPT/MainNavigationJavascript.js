$(".navC1_id span a").css(
  "color" : "#858585"
);

$(".main_navigation_class li span a").click(function() {
  var pageName = $(this).attr('data-type');
  $('#MainContent').load('SECTIONS/' + pageName + '.php');
});