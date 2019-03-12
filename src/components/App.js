import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import { BrowserRouter, Route } from 'react-router-dom';

import { handleInitialData } from '../actions/shared';

import Questions from './Questions';
import Navbar from './Navbar';
import NewPoll from './NewPoll';
import Login from './Login'
import LeaderBoard from './LeaderBoard'
import QuestionAnswerPage from './QuestionAnswerPage'
import QuestionDetail from './QuestionDetail'


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
                        <Fragment>
                            <LoadingBar />
                                <Route path='/' exact component={Questions}/>
                                <Route path='/add' component={NewPoll}/>
                                <Route path='/leaderboard' component={LeaderBoard}/>
                                <Route path='/answer/:id' component={QuestionAnswerPage}/>
                                <Route path='/question/:id' component={QuestionDetail}/>
                        </Fragment>
                        
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
