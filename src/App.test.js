/* global it, expect */
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({adapter: new Adapter()});

it('renders without crashing', () => {
  const component = shallow(<App />);
  expect(component.exists()).toEqual(true);
});
