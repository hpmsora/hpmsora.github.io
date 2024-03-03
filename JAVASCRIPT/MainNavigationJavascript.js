$("#navC1_id span a").css({
  "color" : "#2B2B2B",
  "text-decoration" : "underline"
});

$(".main_navigation_class li span a").click(function() {
  var pageName = $(this).attr('data-type');
  $('#MainContent').load('SECTIONS/' + pageName + '.php');
  $(".main_navigation_class li span a").css({
    "color" : "#B1B1B1",
    "text-decoration" : "none"
  });
  $(this).css({
    "color" : "#2B2B2B",
    "text-decoration" : "underline"
  });
});