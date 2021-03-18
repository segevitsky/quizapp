import React, { useEffect, useState } from "react";
import { getAllQuizes } from '../../api/quizesAPI';
import { useHistory } from 'react-router-dom';
import Quizes from "../Quizes/Quizes";
import "./home.css";

export default function Home() {
	const [quizes, setQuizes] = useState([]);
	const history = useHistory();

	 useEffect(() => {
    (async function() {
		try {
			const allQuized = await getAllQuizes;
			console.log(allQuized);
			setQuizes(allQuized.data);
		} catch (e) {
			history.push('/404');
		}
    })();
	}, [history]);

	return (
		<div className="home">
			<h1 className="app-header"> Welcome to CodeJudge</h1>
			<Quizes quizes={quizes} />
		</div>
	);
}
