import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';

class App extends Component {
    render() {
        return(
            <Fragment>
                <hr/>
                <Button variant='contained' color='primary'>Test</Button>
                <img src='../../public/airQualityLevels.png' alt='Air Quality Levels Guide'/>
            </Fragment>
        )
    }
}

export default App;