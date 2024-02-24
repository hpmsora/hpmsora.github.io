$(document).ready(function() {
	// Name Section
	$('<a/>', {
		text: 'Won Yong Ha'
	}).css({
		"font-size" : "40px"
	}).appendTo('.NameInner_Name')

	// Summary Section
	$.get('/ASSETS/ETC/Summary.txt', function(data) {
		$('<a/>', {
			html: data
		}).css({
			"font-size" : "15px"
		}).appendTo('.SummaryInner_Summary')
	})

	// Experience - START ------------------------------------------------------------------------
	// Experience List Title Section
	$('<a/>', {
		text: 'Experience'
	}).css({
		"font-size" : "30px"
	}).appendTo('.experience_titleInner_title')

	// Experience Section
	$.get('/ASSETS/EXPERIENCES/Experiences.txt', function(data) {
		var dataList = data.split('$$$$');
		var newDataList = [];
		var index;

		for (index = dataList.length - 1; index >= 0 ; index--) {
			experiencesInfoList = dataList[index].split('$');
			experiencesCompany = experiencesInfoList[0];
			experiencesLocation = experiencesInfoList[1];
			experiencesWorkType = experiencesInfoList[2];
			experiencesTitle = experiencesInfoList[3];
			experiencesStart = experiencesInfoList[4];
			experiencesEnd = experiencesInfoList[5];
			experiencesEndDetails = experiencesInfoList[6];

			experiencesInfo =
			"<span style='font-weight:bold'> " + experiencesCompany + "</span>"
			+ "<span>, " + experiencesLocation + "</span>"
			+ "<span>, " + experiencesWorkType + "</span>"
			+ "<span>  (" + experiencesStart + "</span>"
			+ "<span>" + " - " + "</span>"
			+ "<span> " + experiencesEnd + ")</span>"
			+ "</br>"
			+ "<span> " + experiencesTitle + "</span>"
			+ "</br>"
			+ "<span> " + experiencesEndDetails + "</span>";

			$('<p/>', {
				class: 'projectList',
				html: experiencesInfo
			}).css({
				"text-align":"left",
				"font":"15px/17px Arial, sans-serif",
				"white-space":"normal"
			}).appendTo(
				$('<div/>', {
					id: 'education' + index
				}).css({
					"width" : "100%",
					"margin-bottom" : "30px"
				}).appendTo('.experienceInner_Experience')
			)
		}
	})
	// Experience - END   ------------------------------------------------------------------------

	// Education - START ------------------------------------------------------------------------
	// Education List Title Section
	$('<a/>', {
		text: 'Educations'
	}).css({
		"font-size" : "30px"
	}).appendTo('.education_titleInner_title')

	// Education Section
	$.get('/ASSETS/EDUCATION/Education.txt', function(data) {
		var dataList = data.split('$$$$');
		var newDataList = [];
		var index;

		for (index = dataList.length - 1; index >= 0 ; index--) {
			educationInfoList = dataList[index].split('$');
			educationInstitute = educationInfoList[0];
			educationDepartment = educationInfoList[1];
			educationDegree = educationInfoList[2];
			educationMajor = educationInfoList[3];
			educationStart = educationInfoList[4];
			educationEnd = educationInfoList[5];

			educationInfo =
			"<a style='text-decoration: none; color: inherit'>" + "<span style='font-weight:bold'> " + educationInstitute + "</span></a>"
			+ "<span> " + educationDepartment + "</span>"
			+ "<span> (" + educationStart + "</span>"
			+ "<span>" + " - " + "</span>"
			+ "<span> " + educationEnd + ")</span>"
			+ "</br>"
			+ "<span style='font-style:italic'>" + educationDegree + "</span>"
			+ "<span> " + educationMajor + "</span>";

			$('<p/>', {
				class: 'projectList',
				html: educationInfo
			}).css({
				"text-align":"left",
				"font":"15px/17px Arial, sans-serif",
				"white-space":"normal"
			}).appendTo(
				$('<div/>', {
					id: 'education' + index
				}).css({
					"width" : "100%",
					"margin-bottom" : "30px"
				}).appendTo('.educationInner_Education')
			)
		}
	})
	// Education - END   ------------------------------------------------------------------------

	// Certification - START ------------------------------------------------------------------------
	// Certification List Title Section
	$('<a/>', {
		text: 'Certifications'
	}).css({
		"font-size" : "30px"
	}).appendTo('.certification_titleInner_title')

	// Certification Section
	$.get('/ASSETS/CERTIFICATIONS/Certifications.txt', function(data) {
		var dataList = data.split('$$$$');
		var newDataList = [];
		var index;

		for (index = dataList.length - 1; index >= 0 ; index--) {
			certificationInfoList = dataList[index].split('$');
			certificationTitle = certificationInfoList[0];
			certificationInstitute = certificationInfoList[1];
			certificationDate = certificationInfoList[2];
			certificationLink = certificationInfoList[3];

			certificationInfo =
			"<a style='text-decoration: none; color: inherit' href=/ASSETS/CERTIFICATIONS/" + certificationLink + ">" + "<span style='font-weight:bold'> " + certificationTitle + "</span></a>"
			+ "<span style='font-style:italic'> " + certificationInstitute + "</span>"
			+ "<span> " + certificationDate + "</span>";

			$('<p/>', {
				class: 'projectList',
				html: certificationInfo
			}).css({
				"text-align":"left",
				"font":"15px/17px Arial, sans-serif",
				"white-space":"normal"
			}).appendTo(
				$('<div/>', {
					id: 'certification' + index
				}).css({
					"width" : "100%",
					"margin-bottom" : "30px"
				}).appendTo('.certificationInner_Certification')
			)
		}
	})
	// Certification - END   ------------------------------------------------------------------------

	// Quote Section
	$.get('/ASSETS/ETC/Quotes.txt', function(data) {
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
			"font":"bold 17px/19px Arial, sans-serif",
			"white-space":"normal",
			"margin" : "0 auto"
		}).appendTo('.aboutQuoteInner_Quote_Quote')

		$('<span/>', {
			class: 'aboutQuote',
			text: quoteAuthors
		}).css({
			"text-align":"center",
			"font":"bold 15px/17px Arial, sans-serif",
			"white-space":"normal",
			"margin" : "0 auto"
		}).appendTo('.aboutQuoteInner_Quote_Authors')
	})

	// Resume Button
	$('<a/>', {
		class: 'aboutResumeButton',
		href: '/ASSETS/ETC/ResumeWonYongHa.pdf',
		target: '_blank',
		text: 'RESUME'
	}).appendTo('.aboutResumeButtonInner_Button')
});