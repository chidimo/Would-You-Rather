import React, { Fragment } from 'react';
import LoadingBar from 'react-redux-loading';
import { Route, Switch } from 'react-router-dom';


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
                <Route exact path='/' exact component={Questions}/>
                <Route exact path='/add' component={NewPoll}/>
                <Route exact path='/leaderboard' component={LeaderBoard}/>
                <Route path='/answer/:id' component={QuestionAnswerPage}/>
                <Route path='/question/:id' component={QuestionDetail}/>
                <Route component={ErrorBoundary}/>
            </Switch>
        </Fragment>
    )
}

export default AppRoutes
