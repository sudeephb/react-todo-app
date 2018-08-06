/* global it, expect */

import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {App} from './App';
import { initialState } from './reducers/';


configure({adapter: new Adapter()});

it('renders without crashing', () => {
  const mockFunction = jest.fn();

  const component = shallow(<App
                              state = {initialState}
                              submitTodo = {mockFunction}
                              todos = {[]}
                              deleteTodo = {mockFunction}
                               />,
                              );

  expect(component.exists()).toEqual(true);
});
