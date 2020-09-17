$(document).ready(function() {
	$("#DataCollection2").load("https://raw.githack.com/rubenTito/AMT_ST-VQA/master/instructions.html");


	// Instructions expand/collapse
	var content1 = $('#instructionBody1');
	var trigger1 = $('#collapseTrigger1');
	var content2 = $('#instructionBody2');
	var trigger2 = $('#collapseTrigger2');

	content1.hide();
	content2.hide();

	$('#collapse-text1').text('(Click to expand)');
	$('#collapse-text2').text('(Click to expand)');

	trigger1.click(function(){
		content1.toggle();
		var isVisible = content1.is(':visible');
		if(isVisible){
			$('#collapse-text1').text('(Click to collapse)');
		}else{
			$('#collapse-text1').text('(Click to expand)');
		}
	});

	trigger2.click(function(){
		content2.toggle();
		var isVisible = content2.is(':visible');
		if(isVisible){
			$('#collapse-text2').text('(Click to collapse)');
		}else{
			$('#collapse-text2').text('(Click to expand)');
		}
	});
	// end expand/collapse
});