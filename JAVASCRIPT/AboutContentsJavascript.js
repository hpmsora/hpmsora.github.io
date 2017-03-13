var fs = require("fs");
var quotesText = fs.readFileSysnc("/ASSETS/Quotes.txt");

$(document).ready(function() {
	$('<a/>', {
		class: 'aboutResumeButton',
		href: 'hpmsora.github.io/ASSETS/Resume - Won Yong Ha.pdf',
		target: '_blank',
		text: 'RESUME'
	}).appendTo('.aboutResumeButtonInner_Button')
	$('.aboutQuoteInner_Quote').html(quotesText)
});