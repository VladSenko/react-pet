import React from 'react';
import ToDoItem from './ToDoItem';
import { connect } from 'react-redux';

const ToDoList = (props) => {
    console.log(props);
    return (
        <div className='col-sm-8 offset-sm-2'>
            <h1>Your To Do Items</h1>
            <ul style={{padding: '0'}}>
                {props.toDos.map((toDo, i) => {
                    return (
                        <ToDoItem
                            title={toDo.title}
                            isCompleted={toDo.isCompleted}
                            key={i}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

function mapToStateProps(state) {
    return {
        toDos: state.app.toDos,
    };
}

export default connect(mapToStateProps)(ToDoList);
