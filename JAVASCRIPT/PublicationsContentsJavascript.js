$(document).ready(function() {
	// Publication List Section
	$.get('/ASSETS/Publications.txt', function(data) {
		var dataList = data.split('$$$$');
		var newDataList = []
		var index;

		for (index = 0; index < dataList.length; index++) {
			$('<span/>', {
				class: 'publicationList',
				text: dataList[0]
			}).css({
				"text-align":"center",
				"font":"bold 15px/17px Arial, sans-serif",
				"white-space":"normal"
		}).appendTo('.listInner_list')
		}
	})
});