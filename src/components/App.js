import React, { Component, Fragment } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import AppBar from './AppBar';
import Drawer from './Drawer';
import DetailedLegend from './DetailedLegend';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment'
import Location from '@material-ui/icons/LocationOn';


class App extends Component {
    render() {
        return(
            <HashRouter>
                <Fragment>
                    <AppBar/>
                    <Drawer/>
                    <Route path='/detailed-legend' render={ () => <DetailedLegend/> }/>
                </Fragment>
            </HashRouter>
        )
    }
}

export default App;