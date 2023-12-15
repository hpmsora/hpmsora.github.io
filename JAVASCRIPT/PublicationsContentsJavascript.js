$(document).ready(function() {
	// Publication List Section
	$.get('/ASSETS/Publications.txt', function(data) {
		var dataList = data.split('$$$$');
		var newDataList = []
		var index;

		for (index = 0; index < dataList.length; index++) {
			$('<span/>', {
				class: 'publicationList',
				text: dataList[index]
			}).css({
				"text-align":"center",
				"font":"bold 15px/17px Arial, sans-serif",
				"white-space":"normal"
			}).appendTo(
				$('<div/>', {
					id: 'publication' + index
				}).css({
					"width" : "100%"
					"marginBottom" : "30px"
				}).appendTo('.listInner_list')
			)
		}
	})
});