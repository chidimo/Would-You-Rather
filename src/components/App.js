import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { handleInitialData } from '../actions/shared';

import Navbar from './Navbar';
import Login from './Login'
import AppRoutes from './AppRoutes'


class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {

        const { loggedIn } = this.props
    
        return (
            <BrowserRouter>
                <Fragment>
                    <Navbar />

                    <div className="container app-container">
                    { loggedIn === true ?
                        <AppRoutes />
                        : <Login />
                    }
                    </div>
                </Fragment>
            </BrowserRouter>
        );
    }
}


function mapStateToProps({ auth_user }) {
    return {
        loggedIn: auth_user !== ''
    }
}

export default connect(mapStateToProps)(App);
