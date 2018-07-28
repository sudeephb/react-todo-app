/* global expect, it, describe, jest */

import React from "react";
import { shallow, configure, mount } from "enzyme"; 
import Adapter from 'enzyme-adapter-react-16';
import AddTodo from '.';


configure({ adapter: new Adapter() });


describe('AddTodo component', () => {
    let component;
    const submitMock = jest.fn();

    beforeEach(() => {
        component = shallow(
            <AddTodo 
            submitTodo = {submitMock}
            />,
        );
    });

    it('Should render successfully', () => {
        expect(component.exists()).toEqual(true);
    });

    it('Should have one input', () => {
        expect(component.find('.todo-input').length).toEqual(1);
    });


    describe('Add todo button', () => {
        it('should exist', () => {
            expect(component.find('.todo-submit').length).toEqual(1);
        });

        it('Should call the submitTodo function when clicked', () => {
            const component = mount(<AddTodo submitTodo = {submitMock} />);

            expect(submitMock.mock.calls.length).toEqual(0);
            component.find('form').simulate('submit');
            expect(submitMock.mock.calls.length).toEqual(1);
        });
    });
});



