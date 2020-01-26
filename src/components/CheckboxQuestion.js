import React from 'react';
import {Form} from 'react-bootstrap';

import {useStateValue} from '../state';

export default function CheckboxQuestion() {
  const [{checkbox}, dispatch] = useStateValue();

	return (
		<Form.Group controlId='question-checkbox`${i}`'>
      <Form.Label>Checkbox{checkbox}</Form.Label>
      <Form.Check
        type='checkbox'
        name='checkbox'
        label='1'
        // onChange={() => dispatch({type: 'checkbox', payload: {checkbox: [true, false, false]}})}
      />
      <Form.Check
        type='checkbox'
        name='checkbox'
        label='2'
        // onChange={() => dispatch({type: 'checkbox', payload: {checkbox: [false, true, false]}})}
      />
      <Form.Check
        type='checkbox'
        name='checkbox'
        label='3'
        // onChange={() => dispatch({type: 'checkbox', payload: {checkbox: [false, false, true]}})}
      />
      <Form.Text className='text-muted'>
        Select the right answers
      </Form.Text>
    </Form.Group>
	);
}