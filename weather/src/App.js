import React from 'react';
import Title from './Title';
import Form from './Form';

class App extends React.Component {

    handleSubmit = (cityName) => {
        console.log(cityName);
    }

    render() {
        return (
            <>
                <Title />
                <Form onSubmit={this.handleSubmit}/>
            </>
        );
    }
}

export default App;
