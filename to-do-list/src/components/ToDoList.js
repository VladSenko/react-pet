import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = () => {
    return (
        <div className='col-sm-8 offset-sm-2'>
            <h1>Your To Do Items</h1>
            <ToDoItem title={'ABC'} isCompleted={false} />
        </div>
    );
};

export default ToDoList;
