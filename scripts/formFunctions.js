function getFormValues() {
	q0Val = $("#question0").val();
	q1Val = $("#question1").val();
	q2Val = $("#question2").val();

	a0Val = $("#answer0").val();
	a1Val = $("#answer1").val();
	a2Val = $("#answer2").val();

	return [q0Val, q1Val, q2Val, a0Val, a1Val, a2Val];
};

function validateForm() {
	[q0Val, q1Val, q2Val, a0Val, a1Val, a2Val] = getFormValues();

	//If at least one question and its answer are filled, others are not required anymore.
	QA0isFilled = (q0Val != "") && (a0Val != "");
	QA1isFilled = (q1Val != "") || (a1Val != "");
	QA2isFilled = (q2Val != "") || (a2Val != "");

	if (QA0isFilled) {
		$("#question1").prop('required',false);
		$("#answer1").prop('required',false);

		$("#question2").prop('required',false);
		$("#answer2").prop('required',false);
	}

	if (QA1isFilled) {
		$("#question0").prop('required',false);
		$("#answer0").prop('required',false);

		$("#question2").prop('required',false);
		$("#answer2").prop('required',false);
	}

	if (QA2isFilled) {
		$("#question0").prop('required',false);
		$("#answer0").prop('required',false);

		$("#question1").prop('required',false);
		$("#answer1").prop('required',false);
	}

	// Get back to default required values to be sure someone do not write-delete the content and submit.
	if ((!QA0isFilled) && (!QA1isFilled) && (!QA2isFilled)) {
		$("#question0").prop('required',true);
		$("#answer0").prop('required',true);

		$("#question1").prop('required',true);
		$("#answer1").prop('required',true);

		$("#question2").prop('required',true);
		$("#answer2").prop('required',true);
	}
};


function onIsCovidCheckboxChange() {
	isCovid = $("#isCovid").prop('checked');
	isNoCovid = $("#isNoCovid").prop('checked');

	// If one of the checkboxes is already checked, the other should be unchecked, and then, not required.
	if (isCovid) {
		$("#isNoCovid").prop('checked',false);
		$("#isNoCovid").prop('required',false);

		$("#isCovid").prop('value', 'true');
		$("#isNoCovid").prop('value', 'false');

	} else {
		$("#isCovid").prop('required',true);
		$("#isNoCovid").prop('required',true);
	}
};

function onNoIsCovidCheckboxChange() {
	isCovid = $("#isCovid").prop('checked');
	isNoCovid = $("#isNoCovid").prop('checked');

	// If one of the checkboxes is already checked, the other should be unchecked, and then, not required.
	if (isNoCovid) {
		$("#isCovid").prop('checked',false);
		$("#isCovid").prop('required',false);

		$("#isCovid").prop('value', 'false');
		$("#isNoCovid").prop('value', 'true');

	} else {
		$("#isCovid").prop('required',true);
		$("#isNoCovid").prop('required',true);
	}
};

$( document ).ready(function() {
	$( ".questionInput, .answerInput" ).change(validateForm);

	$("#isCovid").change(onIsCovidCheckboxChange);
	$("#isNoCovid").change(onNoIsCovidCheckboxChange);

	alert('Code updated 3');
});


https://rawcdn.githack.com/rubenTito/AMT_ST-VQA/


https://rawcdn.githack.com/rubenTito/AMT_ST-VQA/b84d6f6878630383ee50b978c5845d98564274b8/images/100_Comic/2271_25.jpg
https://rawcdn.githack.com/rubenTito/AMT_ST-VQA/b84d6f6878630383ee50b978c5845d98564274b8/images/VisualGenome_1/1591952.jpg