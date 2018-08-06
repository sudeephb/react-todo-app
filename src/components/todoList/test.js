/* global describe it, expect */

import React from 'react';
import { shallow,configure } from 'enzyme';
import TodoList from '.'; 
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter() });

describe('TodoList component', () => {
    const todos  = [
        {
            id: 1, 
            text: 'A todo',
        },
    ];

    const component = shallow(<TodoList todos = {todos} />);

    it('Should render successfully', () => {
        expect(component.exists()).toEqual(true);
    });

    it('Should display a todo when passed in as a prop', () => {
        expect(component.find('.todo-text').text()).toEqual(todos[0].text);
    });
});