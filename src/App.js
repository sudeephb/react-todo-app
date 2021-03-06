import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddTodo from './components/addTodo/';
import actions from './actions';
import TodoList from "./components/todoList";

export const App = ({submitTodo, todos, deleteTodo}) => (
    <div>
    <h1>Todo List</h1>
    <AddTodo submitTodo={submitTodo} />
    <TodoList todos = {todos} deleteTodo={deleteTodo} />
    </div>
);


App.propTypes = {
    submitTodo: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        },
    )).isRequired,
    deleteTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => state.todoListApp;

const mapDispatchToProps = dispatch => ({
    submitTodo: (text) => {
        if(text){
            dispatch(actions.submitTodo(text));
        }
    },

    deleteTodo: (id) => {
        dispatch(actions.deleteTodo(id));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
