import React from 'react';
import Title from './Title';
import Form from './Form';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherData: {},
        };
    }

    handleSubmit = (cityName) => {
        this.loadWeather(cityName);
    };

    loadWeather = async (cityName) => {
        const apiKey = '2170b7a0bf3efd7a4b705762e7f73b3b';
        const response = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
        );
        const data = await response.json();
        this.setState({ weatherData: data });
    };

    render() {
        return (
            <>
                <Title />
                <Form onSubmit={this.handleSubmit} />
                <h3>Current wether in {this.state.weatherData.name}</h3>
                <p>
                    {this.state.weatherData.sys
                        ? new Date(
                              this.state.weatherData?.sys?.sunrise * 1000
                          ).toLocaleTimeString()
                        : ''}
                </p>
            </>
        );
    }
}

export default App;
