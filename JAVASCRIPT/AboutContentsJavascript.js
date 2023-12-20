$(document).ready(function() {
	// Name Section
	$('<a/>', {
		text: 'Won Yong Ha'
	}).css({
		"font-size" : "40px"
	}).appendTo('.NameInner_Name')

	// Summary Section
	$.get('/ASSETS/Summary.txt', function(data) {
		$('<a/>', {
			html: data
		}).css({
			"font-size" : "15px"
		}).appendTo('.SummaryInner_Summary')
	})

	// Resume Button
	$('<a/>', {
		class: 'aboutResumeButton',
		href: '/ASSETS/ResumeWonYongHa.pdf',
		target: '_blank',
		text: 'RESUME'
	}).appendTo('.aboutResumeButtonInner_Button')

	// Quote Section
	$.get('/ASSETS/Quotes.txt', function(data) {
		var dataList = data.split('$$$$');
		var quoteAndAuthors = dataList[Math.floor(Math.random() * dataList.length)].split('$');
		var quoteText = quoteAndAuthors[0];
		var quoteAuthors = "";
		var count;
		
		for(count = 1; count < quoteAndAuthors.length; count++) {
			if(count == 1) {
				quoteAuthors += ("-" + quoteAndAuthors[count]);
			} else {
				quoteAuthors += (", " + quoteAndAuthors[count]);
			}
		}
		quoteAuthors += "-";

		$('<span>/', {
			text: 'Programmig'
		}).css({
			"white-space":"normal"
		}).appendTo('.keyWordsInner_keyWords_1')

		$('<span>/', {
			text: 'Creativity'
		}).css({
			"white-space":"normal"
		}).appendTo('.keyWordsInner_keyWords_2')

		$('<span>/', {
			text: 'Leadership'
		}).css({
			"white-space":"normal"
		}).appendTo('.keyWordsInner_keyWords_3')

		$('<span/>', {
			class: 'aboutQuote',
			text: quoteText
		}).css({
			"text-align":"center",
			"font":"bold 15px/17px Arial, sans-serif",
			"white-space":"normal"
		}).appendTo('.aboutQuoteInner_Quote_Quote')

		$('<span/>', {
			class: 'aboutQuote',
			text: quoteAuthors
		}).css({
			"text-align":"center",
			"font":"bold 15px/17px Arial, sans-serif",
			"white-space":"normal"
		}).appendTo('.aboutQuoteInner_Quote_Authors')
	})
});