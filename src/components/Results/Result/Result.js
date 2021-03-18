import React from "react";
import PropTypes from 'prop-types';
import "./result.css";


export default function Result(props) {
	const { id, correct, submitted, question } = props;
	return (
		<div className="result" style={{ background: submitted === correct ? '#ffa3cb' : '#fff' }}>
			<div className={`question-${id}`}>
				{" "}
				<strong> Question: </strong> {question}{" "}
			</div>
			<div className={`submitted-answer-${id}`}>
				{" "}
				<strong> Your Answer: </strong> {submitted}{" "}
			</div>
			<div className={`correct-answer-${id}`}>
				{" "}
				<strong> Correct Answer: </strong>
				{correct}{" "}
			</div>
		</div>
	);
}


Result.propTypes = {
  id: PropTypes.number,
  correct: PropTypes.string,
  submitted: PropTypes.string,
  question: PropTypes.string
};