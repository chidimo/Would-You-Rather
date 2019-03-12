import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import { BrowserRouter, Route } from 'react-router-dom';

import { handleInitialData } from '../actions/shared';

import Home from './Home';
import Navbar from './Navbar';
import NewPoll from './NewPoll';
import Login from './Login'
import LeaderBoard from './LeaderBoard'
import PollAnswerPage from './PollAnswerPage'
import PollResultPage from './PollResultPage'


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

                    { loggedIn === true ?

                        <Fragment>
                            <LoadingBar />
                            <div className="container app-container">
                                <Route path='/' exact component={Home}/>
                                <Route path='/add' component={NewPoll}/>
                                <Route path='/leaderboard' component={LeaderBoard}/>
                                <Route path='/question/:id' component={PollAnswerPage}/>
                                <Route path='/poll/results/:id' component={PollResultPage}/>
                            </div>
                        </Fragment>
                        
                        : <Login />
                    }
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
