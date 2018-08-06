import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddTodo from './components/addTodo/';
import actions from './actions';

const App = ({submitTodo}) => (
    <div>
    <h1>Todo List</h1>
    <AddTodo submitTodo={submitTodo} />
    </div>
);


App.PropTypes = {
    submitTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => state.todoListApp;

const mapDispatchToProps = dispatch => ({
    submitTodo: (text) => {
        if(text){
            dispatch(actions.submitTodo(text));
        }
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
