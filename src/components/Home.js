import React, { Component } from 'react'

import { connect } from 'react-redux';

import Login from './Login';

class Home extends Component {
    render() {
        const { questionIds, loggedIn } = this.props
        console.log('home props ', this.props)

        return (
            <div className='container'>
                {
                    loggedIn === true
                    ?
                    questionIds.map((id) => (
                    <p key={id}>Question: {id}</p>
                    ))
                    :
                    <Login />
                }
            </div>
        )
    }
}

function mapStateToProps({ questions, auth_user }) {
    return {
        questionIds: Object.keys(questions),
        loggedIn: auth_user !== ''
    }
}

export default connect(mapStateToProps)(Home)
