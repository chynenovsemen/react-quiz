import React from 'react';
import {Form} from 'react-bootstrap';

export default function SelectQuestion() {
	return (
		<Form.Group controlId="question-select">
          <Form.Label>Select</Form.Label>
          <Form.Control as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
	);
}