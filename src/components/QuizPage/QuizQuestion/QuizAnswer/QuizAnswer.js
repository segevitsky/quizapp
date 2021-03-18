import React from "react";
import './quizAnswers.css';

export default function QuizAnswer({ answer,moveQuestion,id }) {
	return (
		<div className={`answer-value-${ id }`}>
		<label className='answer-label'>
			<input type="radio" id="answer" name='answer' onChange={() => moveQuestion(answer)}/>
			<p> {answer} </p>
		</label>
		</div>
	);

}
