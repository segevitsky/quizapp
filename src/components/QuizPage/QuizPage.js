import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import skuad from "../../api/skuad";
import Spinner from "../UI/Spinner/Spinner";
import QuizQuestion from "./QuizQuestion/QuizQuestion";
import Results from "../Results/Results";
import { useHistory } from 'react-router-dom';
import "./quizPage.css";

export default function QuizPage() {
	const [quizQuestions, setQuizQuestions] = useState({});
	const [questionNumber, setQuestionNumber] = useState(0);
	const [usersAnswers, setUsersAnswers] = useState([]);
	const [results, setResults] = useState({});
	let { slug } = useParams();
	const history = useHistory();

	useEffect(() => {
		(async function() {
			try {
				skuad.get(`/api/quiz-questions/all/${slug}`).then((res) => {
					setQuizQuestions(res.data);
				});
			} catch (e) {
				//redirect here
				history.push('/404');
			}
		})()
	}, [slug,history]);



	//Operated through QuizQuestion
	const questionNumberHandler = (answer) => {
		const questionsLength = quizQuestions.questions.length - 1;
		const { questions } = quizQuestions;
		if (questionNumber < questionsLength) {
			setQuestionNumber((prevNumber) => prevNumber + 1);

			//Copying our answers array
			const answersSoFar = [...usersAnswers];
			answersSoFar.push({
				ques_id: questions[questionNumber].id,
				submitted_option: answer,
			});
			setUsersAnswers(answersSoFar);
		} else {
			//Copying our answers array
			const answersSoFar = [...usersAnswers];
			
			answersSoFar.push({
				ques_id: questions[questionNumber].id,
				submitted_option: answer,
			});

			//The new Data Format
			const dataToPost = {
				quiz_id: slug,
				mappings: answersSoFar,
			};

			//Sending our POST
			skuad.post("/api/user/quiz-score", dataToPost).then((res) => {
				let arrivedResults = res.data;
				const allDataResults = res.data.questions.map((el, i) => {
					return {
						...el,
						question: questions[i]["name"],
					};
				});
				arrivedResults = { ...arrivedResults, questions: allDataResults };
				setResults(arrivedResults);
			}).catch(e => { 
				history.push('/404');
			 }) 
		}
	};

	if (quizQuestions && Object.keys(quizQuestions).length > 0) {
		const { questions } = quizQuestions;
		return (
			<div className="quiz-page">
				<h1 className="quiz-page-header"> {quizQuestions.name} </h1>
				<QuizQuestion
					question={questions[questionNumber]}
					questionNumber={questionNumber}
					moveQuestion={questionNumberHandler}
					results={results}
					time={15}
				/>
				{Object.keys(results).length > 0 ? <Results results={results} /> : null}
			</div>
		);
	}

	return (
		<h1>
			<Spinner />
		</h1>
	);
}
