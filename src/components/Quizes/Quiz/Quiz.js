import React from "react";
import './quiz.css';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';


function Quiz(props) {
	const { id, name, desc } = props
	const history = useHistory()

	const redirect = () => {
		history.push('/api/' + id);
	}

	return (
		<div className={`item item${ id }`}>
			<div className='item-headline'>
				<h3 className={`quiz-list-${ id }`}> {name} </h3> 
				<button onClick={redirect} className={`start start-quiz-${id}`}> Start! </button>
			</div>
			<p className='quiz-desc'> {desc} </p>
		</div>
	)
}


export default Quiz;

Quiz.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	desc: PropTypes.string
}