import React from "react";
import Result from "./Result/Result";
import PropTypes from 'prop-types';
import "./results.css";

export default function Results({ results }) {
	const { score } = results;
	const answersFeedback = results.questions.map((el) => (
		<Result
			key={el.ques_id}
			id={el.ques_id}
			correct={el.correct_option}
			submitted={el.submitted_option}
			question={el.question}
		/>
	));
	return (
		<div className="results-cont">
			<h1> Your Score is: {score} </h1>
			<div className="results">{answersFeedback}</div>
		</div>
	);
}

Results.propTypes = {
  results: PropTypes.object
};
