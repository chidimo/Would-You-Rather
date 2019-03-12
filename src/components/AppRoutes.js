import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Questions from './Questions';
import NewPoll from './NewPoll';
import LeaderBoard from './LeaderBoard'
import QuestionAnswerPage from './QuestionAnswerPage'
import QuestionDetail from './QuestionDetail'
import ErrorBoundary from './ErrorBoundary'


const AppRoutes = (props) => {
    return (
        <Fragment>
            <LoadingBar />
            
            <Switch>
                <Route path='/' exact component={Questions}/>
                <Route path='/add' component={NewPoll}/>
                <Route path='/leaderboard' component={LeaderBoard}/>
                <Route path='/answer/:id' component={QuestionAnswerPage}/>
                <Route path='/question/:id' component={QuestionDetail}/>
                <Route component={ErrorBoundary}/>
            </Switch>
        </Fragment>
    )
}

export default AppRoutes
