import React from 'react';

import {SET_CURRENT_ANSWER, SET_ERROR} from '../reducers/types.js'

export default function Answer({letter, answer, selected, dispatch}) {
	let classes = ['answer'];

	const handleClick = e => {
		dispatch({type: SET_CURRENT_ANSWER, currentAnswer: e.target.value});
		dispatch({type: SET_ERROR, error: ''});
	}

	if (selected) {
		classes.push('selected');
	}
	return (
		<button value={letter} className={classes.join(' ')} onClick={handleClick} >
			<span className='letter'>{letter}</span>{answer}
		</button>
	);
}