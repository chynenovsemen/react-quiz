import React, {useContext} from 'react';

import {QuizContext} from '../context/QuizContext';

export default function Progress() {
	const {state} = useContext(QuizContext);
	const {currentQuestion, questions} = state;
	const current = currentQuestion + 1;
	const total = questions.length;

	return (
		<h2>Question {current} of {total}</h2>
	);
}