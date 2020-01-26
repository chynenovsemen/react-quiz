import React, {useContext} from 'react';
import { Form } from 'react-bootstrap';

import {StateContext} from '../state';
// import {useStateValue} from '../state/StateProvider';

import RadioQuestion from './RadioQuestion';
import CheckboxQuestion from './CheckboxQuestion';
import SelectQuestion from './SelectQuestion';
import TextQuestion from './TextQuestion';

export default function QuizForm() {

    return (
      <Form>
        <RadioQuestion />
        <CheckboxQuestion />
        <SelectQuestion />
        <TextQuestion />
        {/* <Button style={{backgroundColor: name.primary}} primaryaname={name.primary} onClick={() => dispatch({type: 'changeName', newName: {primary: 'blue'}})}>Make me blue!</Button> */}
      </Form>
    );
  }
