import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';

import { handleInitialData } from '../actions/shared';

import Home from './Home';
import Navbar from './Navbar';



class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <LoadingBar />
                <div className="container app-container">
                    <Home />
                </div>
            </React.Fragment>
        );
    }
}

export default connect()(App);
