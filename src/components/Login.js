import React, { Component } from 'react'
import { connect } from 'react-redux';

import { login } from '../actions/authUser'

class Login extends Component {

    loginUser = (e) => {
        e.preventDefault()
        const { dispatch } = this.props
        dispatch(login(e.target.value))
    }


    render() {
        const { userIds } = this.props

        return (
            <div className='login-container'>
                <h2 className='page-heading'>Select a user to continue.</h2>

                <form onChange={(e) => this.loginUser(e)}>
                    <select className='custom-select custom-select-lg mb-3'>
                        <option value=''>Select user</option>
                        {userIds.map((id) => (
                            <option
                                key={id}
                                value={id}
                            >
                                {id}
                            </option>
                        ))}
                    </select>
                </form>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        userIds: Object.keys(users),
    }
}

export default connect(mapStateToProps)(Login)
