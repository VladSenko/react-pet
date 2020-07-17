import React from 'react';

const ToDoItem = ({ title, isCompleted }) => {
    const buttonClass = isCompleted ? 'btn-danger' : 'btn-success';
    return (
        <div
            style={{
                display: 'flex',
                padding: '15px',
                border: '1px solid #ccc',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <p
                style={{
                    textDecoration: isCompleted ? 'line-through' : 'none',
                    margin: '0',
                }}
            >
                {title}
            </p>
            <button
                type='button'
                className={`btn ${buttonClass}`}
                style={{ width: '120px' }}
            >
                {isCompleted ? 'Uncomplete' : 'Complete'}
            </button>
        </div>
    );
};

export default ToDoItem;
