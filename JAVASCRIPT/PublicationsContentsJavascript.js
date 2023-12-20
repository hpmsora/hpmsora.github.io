$(document).ready(function() {
	// Publication List Section
	$.get('/ASSETS/Publications.txt', function(data) {
		var dataList = data.split('$$$$');
		var newDataList = [];
		var index;

		for (index = dataList.length - 1; index >= 0 ; index--) {
			paperInfoList = dataList[index].split('$');
			paperTitle = paperInfoList[0];
			paperAuthors = paperInfoList[1];
			paperPublication = paperInfoList[2];

			$('<p/>', {
				class: 'publicationList',
				//text: dataList[index],
				html: paperTitle + "<em>" + paperAuthors + "</em>" + paperPublication
			}).css({
				"text-align":"center",
				"font":"bold 15px/17px Arial, sans-serif",
				"white-space":"normal"
			}).appendTo(
				$('<div/>', {
					id: 'publication' + index
				}).css({
					"width" : "100%",
					"margin-bottom" : "30px"
				}).appendTo('.listInner_list')
			)
		}
	})
});