import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import QuizPage from './QuizPage/QuizPage';
import ErrorPage from './ErrorPage/ErrorPage';

function App() {
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route path='/api/:slug'>
				<QuizPage />
			</Route>
			<Route path='/404'>
				<ErrorPage />
			</Route>
		</Switch>
	);
}

export default App;
