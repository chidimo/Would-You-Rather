import React, { Component } from 'react'

import { connect } from 'react-redux';

import Login from './Login';
import Questions from './Questions';

class Home extends Component {
    render() {
        const { loggedIn } = this.props
        console.log('home props ', this.props)

        return (
            <div className='container'>
                {
                    loggedIn === true
                    ? <Questions />
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
