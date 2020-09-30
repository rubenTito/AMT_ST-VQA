$(document).ready(function() {
	// $("#DataCollection2").load("https://raw.githack.com/rubenTito/AMT_ST-VQA/master/instructions.html");


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

function appendInstructions(project) {
	instructions = [
		["<li><span class='blueText'>Generate at least 1 question and a maximum of 3, with its respective answers</span>.</li>", "all"],
		["<li>The same question-answer pair <span class='redText'>should not be repeated</span>, although you can ask a similar (paraphrased) question for the same answer.</li>", "all"],
		["<li>The question should be answerable <span class='blueText'>ONLY if the image is shown</span>.</li>", "all"],
		["<li>The question should contain at least <span class='blueText'>4 words</span>.</li>", "all"],
		["<li>The questions can't be <span class='redText boldText'>ambiguous</span> and therefore, if they are asked to a second person he should answer exactly the same and with the <span class='boldText'>same words</span>. To help you with that we limit the maximum answer words allowed to 8, even though we recommend you to <span class='blueText'>not exceed 4</span>.</li>", "all"],
		["<li>Do not ask about things that might have happened in the <span class='redText'>future</span> or <span class='redText'>past</span> unless it's explicitly shown in the image/dialogs.</li>", "comic"],
		/*Something is happening in this line!! */["<li>Do not give people <span class='redText'>proper names</span> <span class='blueText'>unless it can be found in the image</span>.</li>", "comic"],
		["<li>Avoid <span class='redText'>closed-ended questions</span> (e.g. Is there ...?) that can be answered by a simple &#34<span class='redText'>yes</span>&#34 or &#34<span class='redText'>no</span>&#34. However, you can ask <span class='blueText'>binary</span> questions if the <span class='blueText'>answers are varied</span> (e.g. <span class='boldText'>Q</span>: Do you have to cough into your hands or into your upper sleeve? <span class='boldText'>A</span>: Upper sleeve.)</li>", "covid"],
		["<li>Avoid <span class='redText'>closed-ended questions</span> (e.g. Is there ...?) that can be answered by a simple &#34<span class='redText'>yes</span>&#34 or &#34<span class='redText'>no</span>&#34. However, you can ask <span class='blueText'>binary</span> questions if the <span class='blueText'>answers are varied</span> (e.g. <span class='boldText'>Q</span>: Who is wearing a red cape and a blue suit? Captain Nazi or Captain Marvel? <span class='boldText'>A</span>: Captain Marvel.)</li>", "comic"],
		["<li>Respond matter-of-factly and avoid using <span class='redText'>conversational language </span> (e.g. because, there are...) or inserting your <span class='redText'>opinion</span>.</li>", "all"],
		["<li>We encourage you to <span class='blueText'>vary the kind of questions</span> asked using text in the <span class='blueText'>image</span>, <span class='blueText'>pictures</span>, <span class='blueText'>graphics</span>, etc. And avoid questions based on <span class='redText'> text in long paragraphs</span>.</li>", "covid"]
	];

	// Append instructions in the HTML
	for (i=0; i<instructions.length; i++) {
		instruction_html_code = instructions[i][0];
		instruction_project = instructions[i][1];

		if (instruction_project == "all" || instruction_project == project) {
			$("#InstructionsList").append(instruction_html_code);
		}
		else {
			console.log(instruction_html_code, instruction_project);
		}
	};

	if (project == "covid") {
		// COVID Example 1
		example1_allowed_questions = [
			"<li><span class='boldText'>Q</span>: Where should you put your used tissue? <span class='boldText'>A</span>: In waste basket</li>",
			"<li><span class='boldText'>Q</span>: What should you do after using a tissue? <span class='boldText'>A</span>: Wash your hands or use an alcohol-based gel</li>",
			"<li><span class='boldText'>Q</span>: How should you cough or sneeze if you don't have a tissue? <span class='boldText'>A</span>: Into your upper sleeve</li>",
			"<li><span class='boldText'>Q</span>: What should you do if you are sick? <span class='boldText'>A</span>: Use face mask.</li>"
		];

		example1_avoid_questions = [
			"<li><span class='boldText'>Q</span>: Who is the most at risk from COVID-19? <span class='boldText'>Why?</span> This infographic image do not provide information about the risk groups. The question should be answerable <span class='blueText'>ONLY if the image is shown</span></li>"
		];

		example1_image = "https://raw.githack.com/rubenTito/AMT_ST-VQA/master/examples/covid_2.download.jpg";

		// COVID Example 2
		example2_allowed_questions = [
			"<li><span class='boldText'>Q</span>: What symptoms does coronavirus cause? <span class='boldText'>A</span>: Fever, cough, difficulty breathing, muscle pain and tiredness</li>",
			//"<li><span class='boldText'>Q</span>: How can you prevent being infected when visiting affected areas? <span class='boldText'>A</span>: Avoid contact with sick people, wash your hands with soap and water, and use a medical face mask if you develop cough</li>",
			"<li><span class='boldText'>Q</span>: How can the coronavirus be transmitted? <span class='boldText'>A</span>: Via respiratory droplets</li>",
			"<li><span class='boldText'>Q</span>: Which is the estimated incubation period of COVID-19? <span class='boldText'>A</span>: 2-14 days.</li>"
		];

		example2_avoid_questions = [
			"<li><span class='boldText'>Q</span>: Where coronavirus usually circulates? <span class='boldText'>A</span>: Among animals. <span class='boldText'>Why?</span> As long as possible, avoid asking questions which answers can be found in <span class='redText'>long paragraphs</span>.</li>"
		];

		example2_image = "https://raw.githack.com/rubenTito/AMT_ST-VQA/master/examples/covid_3.covid-19-infographic.png";

	} else if (project == "comic") {

		// COMIC Example 1
		example1_allowed_questions = [
			"<li><span class='boldText'>Q</span>: Why should the two men wearing coats feel safe? <span class='boldText'>A</span>: American bombers flying over</li>",
			"<li><span class='boldText'>Q</span>: At what time of day is the action happening? <span class='boldText'>A</span>: Dawn</li>",
			"<li><span class='boldText'>Q</span>: Who is leading the bombing? <span class='boldText'>A</span>: Captain Nazi</li>"
		];

		example1_avoid_questions = [
			"<li><span class='boldText'>Q</span>: What is this comic page number? <span class='boldText'>Q</span>: What is this comic's title? <span class='boldText'>Why?</span> Avoid questions which are not part of the story-plot or the comic's panel.</li>",
			"<li><span class='boldText'>Q</span>: Why are they bombing Captain Marvel? <span class='boldText'>Why?</span> It's not specified in the story (<span class='blueText'>ask matter-of-factly</span> and avoid introduce your <span class='redText'>opinion</span>).</li>"
		];

		example1_image = "https://raw.githack.com/rubenTito/AMT_ST-VQA/master/examples/comic_2461_77.jpg";

		// COMIC Example 2
		example2_allowed_questions = [
			"<li><span class='boldText'>Q</span>: What doesn't Ka'a'nga like? <span class='boldText'>A</span>: Whips or those who use them</li>",
			"<li><span class='boldText'>Q</span>: What is Shark holding in his hand apart from the whip? <span class='boldText'>A</span>: Rifle</li>",
			"<li><span class='boldText'>Q</span>: Who do the men in white shirts represent? <span class='boldText'>A</span>: Commissioner's office</li>",
			"<li><span class='boldText'>Q</span>: Who is the woman trying to help? <span class='boldText'>A</span>: Her father</li>"
		];

		example2_avoid_questions = [
			"<li><span class='boldText'>Q</span>: Is Shark holding a rifle in his hand? <span class='boldText'> Why?</span> Avoid <span class='redText'>closed-ended (yes/no)</span> questions</li>",
			"<li><span class='boldText'>Q</span>: Do Commissioner's men have good intentions? <span class='boldText'>Why?</span> Avoid inserting your <span class='redText'>opinion</span></li>"
		];
		
		example2_image = "https://raw.githack.com/rubenTito/AMT_ST-VQA/master/examples/comic_3686_9.jpg";			

	} else {
		console.log("Error during appending instructions with 'project' variable value. Expected 'covid' or 'comic' but '", project, "' received.");
	}

	// Append Example 1 in the HTML
	for (i=0; i<example1_allowed_questions.length; i++) {
		$("#Ex1AllowedQuestionsList").append(example1_allowed_questions[i]);
	};

	for (i=0; i<example1_avoid_questions.length; i++) {
		$("#Ex1AvoidQuestionsList").append(example1_avoid_questions[i]);
	};

	$("#Ex1Image").attr('src', example1_image);

	// Append Example 2 in the HTML
	for (i=0; i<example2_allowed_questions.length; i++) {
		$("#Ex2AllowedQuestionsList").append(example2_allowed_questions[i]);
	};

	for (i=0; i<example2_avoid_questions.length; i++) {
		$("#Ex2AvoidQuestionsList").append(example2_avoid_questions[i]);
	};

	$("#Ex2Image").attr('src', example2_image);
};