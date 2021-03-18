import React from "react";
import "./quizQuestion.css";
import QuizAnswer from "./QuizAnswer/QuizAnswer";
import Timer from "../../UI/Timer/Timer";

export default function QuizQuestion({ question, moveQuestion, time,questionNumber,results }) {
	const answers = question.options.split(",");
	const resultsArrLength = Object.keys(results).length;
	const quizAnswers = answers.map((el, i) => (
		<QuizAnswer key={el} id={i} answer={answers[i]} moveQuestion={moveQuestion} />
	));

	return (
		<>
			{resultsArrLength > 0 ? null : <Timer time={time} unique={questionNumber} moveQuestion={moveQuestion}/>}
			<div className="questions-cont">
				<h3 className="question"> {question.name} </h3>
				<div className="answers">{quizAnswers}</div>
			</div>
		</>
	);
}
