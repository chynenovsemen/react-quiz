import React, {useContext} from 'react';

import Answer from './Answer';

import {QuizContext} from '../context/QuizContext';

export default function Answers() {
	const {state, dispatch} = useContext(QuizContext);
	const {currentAnswer, currentQuestion, questions} = state;
	const question = questions[currentQuestion];

	return (
		<>
			<Answer letter='a' answer={question.answerA} selected={currentAnswer === 'a'} dispatch={dispatch} />
			<Answer letter='b' answer={question.answerB} selected={currentAnswer === 'b'} dispatch={dispatch} />
			<Answer letter='c' answer={question.answerC} selected={currentAnswer === 'c'} dispatch={dispatch} />
		</>
	);
}