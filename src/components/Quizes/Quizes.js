import React from "react";
import Quiz from "./Quiz/Quiz";
import Spinner from "../UI/Spinner/Spinner";
import "./quizes.css";
import PropTypes from 'prop-types';


export default function Quizes({quizes}) {
	let items = <Spinner />;
	//optional chaining needs to be fixed in react scripts//
	if (quizes && quizes.length > 0) {
		items = quizes.map((q) => (
			<Quiz id={q.id} key={q.id} name={q.name} desc={q.description} />
		));
	}

	return <div className="items">{items}</div>;
}

Quizes.propTypes = {
  quizes: PropTypes.array
};