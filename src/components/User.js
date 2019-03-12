import React, { Component } from 'react'

import { connect } from 'react-redux';


class User extends Component {

    render() {
        const { author } = this.props
        const { name } = author

        return (
            <div className=''>
                <span className='author-name'>{name} asks:</span>
                <img src={`https://robohash.org/${name}.png`} alt={`Avatar of ${name}`} className="avatar"/>
            </div>
        )
    }
}

function mapStateToProps({ users, auth_user }, { id }) {
    const author = users[id]

    return {
        auth_user,
        author
    }
}

export default connect(mapStateToProps)(User)
