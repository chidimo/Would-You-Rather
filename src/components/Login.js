import React, { Component } from 'react'

import { connect } from 'react-redux';

class Login extends Component {
    render() {
        const { userIds } = this.props
        console.log('props ', this.props)

        return (
            <div className='center'>
                <h2 className=''>Please select a user to continue.</h2>

                <select className='custom-select custom-select-lg mb-3'>
                    <option value=''>Select user</option>
                    {userIds.map((id) => (
                        <option key={id} value={id}>{id}</option>
                    ))}
                </select>
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
