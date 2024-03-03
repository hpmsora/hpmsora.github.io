$(".navC1_id span a").css(
  "color" : "#2B2B2B"
);

$(".main_navigation_class li span a").click(function() {
  var pageName = $(this).attr('data-type');
  $('#MainContent').load('SECTIONS/' + pageName + '.php');
  $(".main_navigation_class li span a").css(
    "color" : "#858585"
  );
  $(this).css(
    "color" : "#2B2B2B"
  );
});