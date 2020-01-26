import React from 'react';
import {Form} from 'react-bootstrap';

export default function RadioQuestion() {
	return (
		<Form.Group controlId="question-radio">
          <Form.Label>Radio</Form.Label>
          <Form.Check
            type='radio'
            name='radio'
            label='1'
          />
          <Form.Check
            type='radio'
            name='radio'
            label='2'
          />
          <Form.Check
            type='radio'
            name='radio'
            label='3'
          />
          <Form.Text className="text-muted">
            Select the right answer
          </Form.Text>
        </Form.Group>
	)
}