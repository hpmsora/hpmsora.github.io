<ul class="main_navigation_class" id="main_navigation_id">
  <li id="navC1_id"><span><a href="HomeContents">HOME</a></span></li>
  <li id="navC2_id"><span><a href="AboutContents">ABOUT</a></span></li>
  <li id="navC3_id"><span><a href="WorksContents">WORKS</a></span></li>
</ul>
  <script>
  $("a").click(function() {
	var pageName = $(this).attr('href');
	$('#content').load('SECTIONS/' + pageName + '.php');
    });
 </script>
