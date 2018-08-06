/* global describe it, expect */

import React from 'react';
import { shallow,configure } from 'enzyme';
import TodoList from '.'; 
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter() });

describe('TodoList component', () => {
    const deleteMock = jest.fn();

    const props = {
        todos: [
            {
                id: 1, 
                text: 'A todo',
            },
        ],
        deleteTodo: deleteMock,
    }
    const component = shallow(<TodoList {...props} />);

    it('Should render successfully', () => {
        expect(component.exists()).toEqual(true);
    });

    it('Should display a todo when passed in as a prop', () => {
        expect(component.find('.todo-text').text()).toEqual(props.todos[0].text);
    });

    it('Should call the delteTodo function when Delete Button is clicked', () => {
        expect(deleteMock.mock.calls.length).toEqual(0);
        component.find('.todo-delete').simulate('click');
        expect(deleteMock.mock.calls.length).toEqual(1);
    })
});