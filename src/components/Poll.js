import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import User from './User'


class Poll extends Component {

    render() {
        const { question, user } = this.props

        const id = question.id
        let answered = false

        if (Object.keys(user.answers).includes(id)) answered = true

        return (
            <div className='question-home-card card'>

                <User id={question.author} />
 
                <h5>Would You Rather</h5>
                <p>{question.optionOne.text}...</p>

                {
                    answered === true ?
                    <Link to={`/question/${question.id}`} className='btn btn-success btn-sm'>View poll</Link>
                    :
                    <Link to={`/answer/${question.id}`} className='btn btn-primary btn-sm'>View poll</Link>
                }
                
            </div>
        )
    }
}

function mapStateToProps({ questions, auth_user, users }, { id }) {
    const q = questions[id]

    return {
        user: users[auth_user],
        question: q ? q : null
    }
}

export default connect(mapStateToProps)(Poll)
