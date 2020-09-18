$(document).ready(function() {
	$("#DataCollection2").load("https://raw.githack.com/rubenTito/AMT_ST-VQA/master/instructions.html");


	// Instructions expand/collapse
	var content = $('#instructionBody');
	var trigger = $('#collapseTrigger');

	content.hide();

	$('#collapse-text').text('(Click to expand)');

	trigger.click(function(){
		content.toggle();
		var isVisible = content.is(':visible');
		if(isVisible){
			$('#collapse-text').text('(Click to collapse)');
		}else{
			$('#collapse-text').text('(Click to expand)');
		}
	});

	// end expand/collapse
});