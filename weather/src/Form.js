import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <form className='city-form'>
                <input
                    type='text'
                    placeholder='Search by city'
                    className='city-input'
                ></input>
            </form>
        );
    }
}

export default Form;
