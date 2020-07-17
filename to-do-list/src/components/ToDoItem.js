import React from 'react';

const ToDoItem = ({ id, title, isCompleted, onUpdatedToDoItem }) => {
    const buttonClass = isCompleted ? 'btn-danger' : 'btn-success';

    const onClickHandler = () => {
        onUpdatedToDoItem({
            id,
            title,
            isCompleted: !isCompleted,
        });
    };

    return (
        <li
            style={{
                display: 'flex',
                marginBottom: '10px',
                padding: '15px',
                border: '1px solid #ccc',
                borderRadius: '4px',
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
                onClick={onClickHandler}
            >
                {isCompleted ? 'Uncomplete' : 'Complete'}
            </button>
        </li>
    );
};

export default ToDoItem;
