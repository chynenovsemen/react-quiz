import React, {useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// import {StateContext, initialState, StateProvider, reducer} from './state';
import {QuizContext} from './context/QuizContext'

import {SET_CURRENT_ANSWER, SET_CURRENT_QUESTION, SET_ERROR, SET_SHOW_RESULTS, SET_ANSWERS, RESET_QUIZ} from './reducers/types.js';
import quizReducer from './reducers/QuizReducer';

// import QuizForm from './components/QuizForm';
import Progress from './components/Progress';
import Question from './components/Question';
import Answers from './components/Answers';

export default function App() {
	const questions = [
		{
			id: 1,
			question: 'What?',
			answerA: 'aaa',
			answerB: 'bbb',
			answerC: 'ccc',
			correctAnswer: 'b'
		},
		{
			id: 2,
			question: 'Where?',
			answerA: 'aaa',
			answerB: 'bbb',
			answerC: 'ccc',
			correctAnswer: 'a'
		},
		{
			id: 3,
			question: 'When?',
			answerA: 'aaa',
			answerB: 'bbb',
			answerC: 'ccc',
			correctAnswer: 'c'
		}
	];

	const initialState = {
		questions,
		currentQuestion: 0,
		currentAnswer: '',
		answers: [],
		showResults: false,
		error: '',
	}

	const [state, dispatch] = useReducer(quizReducer, initialState);
	const {currentQuestion, currentAnswer, answers, showResults, error} = state;

	// const [currentQuestion, setCurrentQuestion] = useState(0);
	// const [currentAnswer, setCurrentAnswer] = useState('');
	// const [answers, setAnswers] = useState([]);
	// const [showResults, setShowResults] = useState(false);
	// const [error, setError] = useState('');

	const question = questions[currentQuestion];

	const renderResultsMark = (question, answer) => {
		if (question.correctAnswer === answer.answer) {
			return <span className='correct'>Correct</span>
		}

		return <span className='failed'>Failed</span>
	}

	const renderResultsData = () => {
		return answers.map(answer => {
			const question = questions.find(question => question.id === answer.questionId);
			return (
				<li key={question.id}>
					{question.question} - {renderResultsMark(question, answer)}
				</li>
			)
		})
	}

	const restart = () => {
		dispatch({type: RESET_QUIZ});
	}

	const next = () => {
		const answer = {
			questionId: question.id,
			answer: currentAnswer
		};

		if (!currentAnswer) {
			dispatch({type: SET_ERROR, error: 'Please select an option'});
			return;
		}

		answers.push(answer);
		dispatch({type: SET_ANSWERS, answers: answers});
		dispatch({type: SET_CURRENT_ANSWER, currentAnswer: ''});
		if (currentQuestion + 1 < questions.length) {
			dispatch({type: SET_CURRENT_QUESTION, currentQuestion: currentQuestion + 1});
			return;
		}

		dispatch({type: SET_SHOW_RESULTS, showResults: true});
	}

	const renderError = () => {
		if (!error) {
			return;
		}

		return <div className='error'>{error}</div>;
	}

	if (showResults) {
		return (
			<div className='container results'>
				<h2>Results</h2>
				<ul>{renderResultsData()}</ul>
				<button className='btn btn-primary' onClick={restart}>Restart</button>
			</div>
		)
	} else {
		return (
			// {/* // <StateProvider initialState={initialState} reducer={reducer}> */}
			// {/* <StateProvider value={{dispatch, state}}> */}
			<QuizContext.Provider value={{state, dispatch}} className='container'>
				<div className='container'>
					<Progress />
					<Question />
					{renderError()}
					<Answers />
					<button className='btn btn-primary' onClick={next}>Confirm and Continue</button>
				</div>
				{/* // <QuizForm /> */}
			</QuizContext.Provider>
			// {/* // </StateProvider> */}
		);
	}
}
