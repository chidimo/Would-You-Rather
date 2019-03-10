import React, { Component } from 'react'

import { connect } from 'react-redux';


class Author extends Component {

    render() {
        const { auth_user, author } = this.props
        console.log('author props: ', this.props)
        const { name, } = author

        return (
            <div className='author-card'>
                <img src={`https://robohash.org/${name}.png`} alt={`Avatar of ${name}`} className="avatar img-card"/>
                <span className='author-name'>{name} asks:</span>
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

export default connect(mapStateToProps)(Author)
