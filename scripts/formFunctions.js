function hideQA(idxQA){
	$("#QADiv" + idxQA.toString()).hide();
}

function fillQAs(qa_list) {
	for (let i = 0; i < qa_list.length; i++) {
		qa = qa_list[i];
		question = qa['question'];
		answers = qa['answer'];
		answer = answers[0];

		$("#question" + i.toString()).val(question);
		$("#answerOri" + i.toString()).val(answer);

		if (answers.length == 2) {
			verification = answers[1];
			$("#answerVeri" + i.toString()).val(verification);
		}
	}

	for (let i = qa_list.length; i <= maxQA; i++) {
		hideQA(i);
	}
}