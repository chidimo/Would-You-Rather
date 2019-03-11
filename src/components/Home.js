import React, { Component } from 'react'

import { connect } from 'react-redux';

import Login from './Login';
import Polls from './Polls';

class Home extends Component {
    render() {
        const { loggedIn } = this.props

        return (
            <div className='container'>
                {
                    loggedIn === true
                    ? <Polls />
                    : <Login />
                }
            </div>
        )
    }
}

function mapStateToProps({ auth_user }) {
    return {
        loggedIn: auth_user !== ''
    }
}

export default connect(mapStateToProps)(Home)
