$(".WorkContent_ContentBox").hover(function() {
  $(this).css({
    "-webkit-box-shadow":"1px 1px 1px rgba(0,0,0,.29), inset 0px 0px 2px rgba(0,0,0, .5)",
    "-moz-box-shadow":"1px 1px 1px rgba(0,0,0,.29), inset 0px 0px 2px rgba(0,0,0, .5)",
    "box-shadow":"1px 1px 1px rgba(0,0,0,.29), inset 0px 0px 2px rgba(0,0,0, .5)"
  })
});

$(".WorkContent_ContentBox").active(function() {
  $(this).css({
    "-webkit-box-shadow: inset 0px 0px 3px rgba(0,0,0, .8)",
    "-moz-box-shadow: inset 0px 0px 3px rgba(0,0,0, .8)",
    "box-shadow: inset 0px 0px 3px rgba(0,0,0, .8)"
  })
});