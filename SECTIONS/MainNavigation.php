<ul class="main_navigation_class" id="main_navigation_id">
  <li id="navC2_id"><span><a href="#" data-type="AboutContents">ABOUT</a></span></li>
  <li id="navC3_id"><span><a href="#" data-type="WorksContents">WORKS</a></span></li>
  <li id="navC1_id"><span><a href="#" data-type="ContactContents">CONTACT</a></span></li>
</ul>
  <script>
  $(".main_navigation_class li span a").click(function() {
	var pageName = $(this).attr('data-type');
	$('#MainContent').load('SECTIONS/' + pageName + '.php');
    });
 </script>
