import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        };
    }

    updateInputValue = (e) => this.setState({ inputValue: e.target.value });

    render() {
        return (
            <form className='city-form'>
                <input
                    type='text'
                    placeholder='Search by city'
                    className='city-input'
                    required
                    value={this.state.inputValue}
                    onChange={this.updateInputValue}
                ></input>
                <button className='search-button'>Search</button>
            </form>
        );
    }
}

export default Form;
