import React from 'react';
import ToDoItem from './ToDoItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as toDoActions from './../redux/actions/toDoActions';

const ToDoList = (props) => {
    const updateToDoItem = (toDoItem) => {
        props.dispatch(toDoActions.updateItem(toDoItem));
    };

    return (
        <div className='col-sm-8 offset-sm-2'>
            <h1>Your To Do Items</h1>
            <ul style={{ padding: '0' }}>
                {props.toDos.map((toDo, i) => {
                    return (
                        <ToDoItem
                            id={toDo.id}
                            title={toDo.title}
                            isCompleted={toDo.isCompleted}
                            key={i}
                            onUpdatedToDoItem={updateToDoItem}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

ToDoList.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

function mapToStateProps(state) {
    return {
        toDos: state.app.toDos.sort((x, y) => {
            return Number(x.isCompleted) - Number(y.isCompleted);
        }),
    };
}

export default connect(mapToStateProps)(ToDoList);
