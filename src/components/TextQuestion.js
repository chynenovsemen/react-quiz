import React from 'react';
import {Form} from 'react-bootstrap';

export default function SelectQuestion() {
	return (
        <Form.Group controlId="question-text">
          <Form.Label>Text</Form.Label>
          <Form.Control type="text" placeholder="Enter smth" />
          <Form.Text className="text-muted">
            lorem ipsum
          </Form.Text>
        </Form.Group>
	);
}