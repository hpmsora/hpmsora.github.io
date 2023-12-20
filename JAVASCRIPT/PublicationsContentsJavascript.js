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

			paperInfo = "<strong> " + paperTitle + "</strong>" + " <span style='font-style:italic'> " + paperAuthors + " </span> " + paperPublication

			$('<p/>', {
				class: 'publicationList',
				html: paperInfo
			}).css({
				"text-align":"center",
				"font":"15px/17px Arial, sans-serif",
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