/* global expect, it, describe */

import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import AddTodo from '.';


configure({ adapter: new Adapter() });

describe('AddTodo component', () => {
    it('Should render successfully', () => {
        const component = shallow(<AddTodo />);
        expect(component.exists()).toEqual(true);
    });
});

