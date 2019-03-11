import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import { BrowserRouter, Route } from 'react-router-dom';

import { handleInitialData } from '../actions/shared';

import Home from './Home';
import Navbar from './Navbar';
import NewPoll from './NewPoll';
import LeaderBoard from './LeaderBoard'
import PollAnswerPage from './PollAnswerPage'


class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (

            <BrowserRouter>
                <React.Fragment>
                    <Navbar />
                    <LoadingBar />
                    <div className="container app-container">
                        <Route path='/' exact component={Home}/>
                        <Route path='/new' component={NewPoll}/>
                        <Route path='/leaderboard' component={LeaderBoard}/>
                        <Route path='/poll/:id' component={PollAnswerPage}/>
                    </div>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default connect()(App);
