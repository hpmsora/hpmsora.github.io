$(document).ready(function() {
	// Paper List Title Section
	$('<a/>', {
		text: 'Published Paper',
		href: 'https://scholar.google.com/citations?user=wE4EulMAAAAJ&hl=en'
	}).css({
		"font-size" : "30px",
		"text-decoration" : "none",
		"color" : "inherit"
	}).appendTo('.paper_titleInner_title')

	// Paper List Section
	$.get('/ASSETS/PUBPLICATIONS/Publications.txt', function(data) {
		var dataList = data.split('$$$$');
		var newDataList = [];
		var index;

		for (index = dataList.length - 1; index >= 0 ; index--) {
			paperInfoList = dataList[index].split('$');
			paperTitle = paperInfoList[0];
			paperAuthors = paperInfoList[1];
			paperPublication = paperInfoList[2];
			paperLink = paperInfoList[3];

			paperInfo =
			"<a style='text-decoration: none; color: inherit' href=" + paperLink + ">" + "<span style='font-weight:bold'> " + paperTitle + "</span></a>"
			+ "<span style='font-style:italic'>" + ", " +  paperAuthors + "</span>"
			+ "<span>" + ", " + paperPublication + "." + "</span>";

			$('<p/>', {
				class: 'publicationList',
				html: paperInfo
			}).css({
				"text-align":"left",
				"font":"15px/17px Arial, sans-serif",
				"white-space":"normal"
			}).appendTo(
				$('<div/>', {
					id: 'publication' + index
				}).css({
					"width" : "100%",
					"margin-bottom" : "30px"
				}).appendTo('.paper_listInner_list')
			)
		}
	})

	// Paper List Title Section
	$('<a/>', {
		text: 'Academic Project'
	}).css({
		"font-size" : "30px"
	}).appendTo('.project_titleInner_title')

	// Project List Section
	$.get('/ASSETS/PROJECTS/projects.txt', function(data) {
		var dataList = data.split('$$$$');
		var newDataList = [];
		var index;

		for (index = dataList.length - 1; index >= 0 ; index--) {
			projectInfoList = dataList[index].split('$');
			projectTitle = projectInfoList[0];
			projectInstitute = projectInfoList[1];
			projectDate = projectInfoList[2];
			projectLink = projectInfoList[3];

			projectInfo = "<a style='text-decoration: none; color: inherit' href=/ASSETS/PROJECTS/" + projectLink + ">" + "<span style='font-weight:bold'> " + projectTitle + "</span></a>"
			+ "<span style='font-style:italic'>" + ", " +  projectInstitute + "</span>"
			+ "<span>" + ", " + projectDate + "." + "</span>";

			$('<p/>', {
				class: 'projectList',
				html: projectInfo
			}).css({
				"text-align":"left",
				"font":"15px/17px Arial, sans-serif",
				"white-space":"normal"
			}).appendTo(
				$('<div/>', {
					id: 'project' + index
				}).css({
					"width" : "100%",
					"margin-bottom" : "30px"
				}).appendTo('.project_listInner_list')
			)
		}
	})
});