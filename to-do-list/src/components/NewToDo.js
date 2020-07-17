import React from 'react';

class NewToDo extends React.Component {
    state = {
        toDoTitle: '',
    };

    onChangeHandler = (e) => {
        this.setState({ toDoTitle: e.target.value });
    };

    onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(this.state.toDoTitle);
        this.setState({ toDoTitle: '' });
    };

    render() {
        return (
            <div className='col-sm-8 offset-sm-2'>
                <h1>Create new To Do Item</h1>
                <form onSubmit={this.onSubmitHandler}>
                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder='Type here what to do'
                            className='form-control'
                            value={this.state.toDoTitle}
                            onChange={this.onChangeHandler}
                        ></input>
                    </div>
                    <input
                        type='submit'
                        value='Save'
                        className='btn btn-primary'
                    ></input>
                </form>
            </div>
        );
    }
}

export default NewToDo;
