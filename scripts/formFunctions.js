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
		alert("Is Covid: ", isCovid);
		$("#isNoCovid").prop('checked',false);
		$("#isNoCovid").prop('required',false);

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
		alert("Is No Covid: ", isNoCovid);
		$("#isCovid").prop('checked',false);
		$("#isCovid").prop('required',false);

	} else {
		$("#isCovid").prop('required',true);
		$("#isNoCovid").prop('required',true);
	}
};


/*function validateCheckboxes() {
	isCovid = $("#isCovid").prop('checked');
	isNoCovid = $("#isNoCovid").prop('checked');

	// If one of the checkboxes is already checked, the other should be unchecked, and then, not required.
	if (isCovid) {
		alert("Is Covid: ", isCovid);
		$("#isNoCovid").prop('checked',false);
		$("#isNoCovid").prop('required',false);
	}

	if (isNoCovid) {
		alert("Is No Covid: ", isNoCovid);
		$("#isCovid").prop('checked',false);
		$("#isCovid").prop('required',false);
	}

	// Turn checkboxes required.
	if (!isCovid && !isNoCovid) {
		alert("Both negative!");
		$("#isCovid").prop('required',true);
		$("#isNoCovid").prop('required',true);
	}
};*/

$( document ).ready(function() {
	//$( ".questionInput, .answerInput" ).change(validateForm);
	$("#isCovid, #isNoCovid").change(validateCheckboxes);
	$("#isCovid").change(onIsCovidCheckboxChange);

	alert('Code updated 2');
});