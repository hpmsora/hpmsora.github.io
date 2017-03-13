$(document).ready(function() {
	$('<a/>', {
		class: 'aboutResumeButton',
		href: 'hpmsora.github.io/ASSETS/Resume - Won Yong Ha.pdf',
		target: '_blank',
		text: 'RESUME'
	}).appendTo('.aboutResumeButtonInner_Button')
	$.get('/ASSETS/Quotes.txt', function(data) {
		var dataList = data.split('$$$$');
		var quoteAndAuthors = dataList[Math.floor(Math.random() * dataList.length)].split('$');
		var quoteText = quoteAndAuthors[0];
		var count;
		
		for(count = 1; count < quoteAndAuthors.length; count++) {
			quoteText += ("\n-" + quoteAndAuthors[count] + "-");
		}
		
		//$('.aboutQuoteInner_Quote').html(quoteText)
		$('.aboutQuoteInner_Quote').html(dataList[1])
	})
});