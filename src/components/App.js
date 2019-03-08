import React, { Component } from 'react';
import { connect } from 'react-redux';

import { handleInitialData } from '../actions/shared';

import Home from './Home';

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Would You Rather</a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">New question</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }
    render() {
        return (

            <React.Fragment>
                <Navbar />
                <div className="container">
                    <Home />
                </div>
            </React.Fragment>
        );
    }
}

export default connect()(App);
