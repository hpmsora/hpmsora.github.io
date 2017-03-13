$(document).ready(function() {
	$('<a/>', {
		class: 'aboutResumeButton',
		href: 'hpmsora.github.io/ASSETS/Resume - Won Yong Ha.pdf',
		target: '_blank',
		text: 'RESUME'
	}).appendTo('.aboutResumeButtonInner_Button')
	$.get('/ASSETS/Quotes.txt', function(data) {
		var dataList = data.split('$$$$');
		var randomOrder = Math.floor(Math.random() * dataList.length);
		$('.aboutQuoteInner_Quote').html(dataList[randomOrder])
	})
});