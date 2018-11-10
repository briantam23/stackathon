import React, { Component, Fragment } from 'react';
import Input from '@material-ui/core/Input';
import AppBar from '@material-ui/core/AppBar';

class App extends Component {
    render() {
        return(
            <Fragment>
                <AppBar>Air Quality Index</AppBar>
                <img src='../../public/airQualityLevels.png' alt='Air Quality Levels Guide'/>
                <Input id='autocomplete' placeholder='Enter a location!' type='text' fullWidth/>
            </Fragment>
        )
    }
}

export default App;