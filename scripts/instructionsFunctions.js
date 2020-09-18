$(document).ready(function() {
	$("#DataCollection2").load("https://raw.githack.com/rubenTito/AMT_ST-VQA/master/instructions.html");


	// Instructions expand/collapse
	var content = $('#instructionBody');
	var trigger = $('#collapseTrigger');
	// var content2 = $('#instructionBody2');
	// var trigger2 = $('#collapseTrigger2');

	content.hide();
	// content2.hide();

	$('#collapse-text').text('(Click to expand)');
	// $('#collapse-text2').text('(Click to expand)');

	trigger.click(function(){
		content.toggle();
		var isVisible = content.is(':visible');
		if(isVisible){
			$('#collapse-text').text('(Click to collapse)');
		}else{
			$('#collapse-text').text('(Click to expand)');
		}
	});

	/*trigger2.click(function(){
		content2.toggle();
		var isVisible = content2.is(':visible');
		if(isVisible){
			$('#collapse-text2').text('(Click to collapse)');
		}else{
			$('#collapse-text2').text('(Click to expand)');
		}
	});*/
	// end expand/collapse
});