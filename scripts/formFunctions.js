function getFormValues() {
	q0Val = $("#question0").val();
	q1Val = $("#question1").val();
	q2Val = $("#question2").val();

	a0Val = $("#answer0").val();
	a1Val = $("#answer1").val();
	a2Val = $("#answer2").val();

	return (q0Val, q1Val, q2Val, a0Val, a1Val, a2Val)
};

function validateForm() {
	//q0Val, q1Val, q2Val, a0Val, a1Val, a2Val = getFormValues();
	q0Val = $("#question0").val();
	q1Val = $("#question1").val();
	q2Val = $("#question2").val();

	a0Val = $("#answer0").val();
	a1Val = $("#answer1").val();
	a2Val = $("#answer2").val();

	console.log(q0Val, q1Val, q2Val, a0Val, a1Val, a2Val)

	//If at least one question and its answer are filled, others are not required anymore.
	QA0isFilled = (q0Val != "") && (a0Val != "");
	QA1isFilled = (q1Val != "") || (a1Val != "");
	QA2isFilled = (q2Val != "") || (a2Val != "");

	if (QA0isFilled) {
		console.log('ok')
	}
};

$( document ).ready(function() {
	submitButton.onclick = function(ev) {
		q0Val = $("#question0").val();
		q1Val = $("#question1").val();
		q2Val = $("#question2").val();

		a0Val = $("#answer0").val();
		a1Val = $("#answer1").val();
		a2Val = $("#answer2").val();

		corBB0 = $("#corBBHidInput0").val();
		corBB1 = $("#corBBHidInput1").val();
		corBB2 = $("#corBBHidInput2").val();

		checkBoxChecked = document.getElementById('canBeQAedCheckBox').checked;

		QA0isEmpty = ((q0Val == "") ||  (a0Val == "") || (corBB0 == "") || (corBB0 == "|"));
		QA1isEmpty = ((q1Val == "") ||  (a1Val == "") || (corBB1 == "") || (corBB1 == "|"));
		QA2isEmpty = ((q2Val == "") ||  (a2Val == "") || (corBB2 == "") || (corBB2 == "|"));

		if (QA0isEmpty && QA1isEmpty && QA2isEmpty && !checkBoxChecked) {
			alert("There isn't any complete Question and Answer. Remember that you must provide at least one Question and Answer. If there isn't any posible question and answer for this image, you can check the 'There is no Question and Answer for the text found in the image<' checkbox and submit.");
		    ev.preventDefault();
		    ev.stopPropagation();
		}
	};

	let q0Val = 0;
	let q1Val = 0;
	let q2Val = 0;
	let a0Val = 0;
	let a1Val = 0;
	let a2Val = 0;

	$( ".questionInput, .answerInput" ).change(function() {
		//q0Val, q1Val, q2Val, a0Val, a1Val, a2Val = getFormValues();
		q0Val = $("#question0").val();
		q1Val = $("#question1").val();
		q2Val = $("#question2").val();

		a0Val = $("#answer0").val();
		a1Val = $("#answer1").val();
		a2Val = $("#answer2").val();

		console.log(q0Val, q1Val, q2Val, a0Val, a1Val, a2Val)
		alert(q0Val);

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
	});

	// $( ".questionInput, .answerInput" ).change(validateForm);
});
